-- Enable RLS
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Table des catégories
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  color VARCHAR(7) NOT NULL,
  icon VARCHAR(10) NOT NULL
);

-- Table des éléments
CREATE TABLE IF NOT EXISTS elements (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  emoji VARCHAR(10) NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  is_base BOOLEAN DEFAULT false,
  tier INTEGER DEFAULT 0,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table des combinaisons
CREATE TABLE IF NOT EXISTS combinations (
  id SERIAL PRIMARY KEY,
  element1_id INTEGER REFERENCES elements(id) NOT NULL,
  element2_id INTEGER REFERENCES elements(id) NOT NULL,
  result_id INTEGER REFERENCES elements(id) NOT NULL,
  UNIQUE(element1_id, element2_id),
  CHECK(element1_id <= element2_id)
);

-- Index de performance
CREATE INDEX IF NOT EXISTS idx_combinations_element1 ON combinations(element1_id);
CREATE INDEX IF NOT EXISTS idx_combinations_element2 ON combinations(element2_id);
CREATE INDEX IF NOT EXISTS idx_combinations_lookup ON combinations(element1_id, element2_id);
CREATE INDEX IF NOT EXISTS idx_elements_category ON elements(category_id);
CREATE INDEX IF NOT EXISTS idx_elements_tier ON elements(tier);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE elements ENABLE ROW LEVEL SECURITY;
ALTER TABLE combinations ENABLE ROW LEVEL SECURITY;

-- Policies: lecture seule pour anon
CREATE POLICY "Allow anon read categories" ON categories FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon read elements" ON elements FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon read combinations" ON combinations FOR SELECT TO anon USING (true);
