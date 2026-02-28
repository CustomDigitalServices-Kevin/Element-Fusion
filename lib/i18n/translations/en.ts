import type { TranslationDict } from '../types'

export const en: TranslationDict = {
  ui: {
    app_title: 'Element Fusion',
    get_hint: 'Get a hint',
    hint: 'Hint',
    encyclopedia: 'Encyclopedia',
    reset_progress: 'Reset progress',
    reset_confirm_title: 'Reset progress?',
    reset_confirm_message: 'All your progress will be erased. Only the 4 base elements will remain.',
    cancel: 'Cancel',
    reset: 'Reset',

    search_placeholder: 'Search an element...',
    sort_recent: 'Recent',
    sort_alpha: 'A → Z',
    sort_tier: 'Tier',
    category_all: 'All',
    no_results: 'No results',
    no_elements: 'No elements discovered',

    fusion_zone: 'Fusion zone',
    clear: 'Clear',
    slot_1: 'Element 1',
    slot_2: 'Element 2',
    no_combination: 'No combination',
    new_discovery: 'New!',
    already_known: 'Already discovered:',
    workspace_hint: 'Drag 2 elements here to fuse them',
    workspace_hint_one: 'Add a 2nd element',

    click_to_continue: 'Click to continue',

    onboarding_step1_title: 'Drag an element',
    onboarding_step1_desc: 'Select an element from your inventory and drag it to the fusion zone. You can also tap on it!',
    onboarding_step2_title: 'Add a 2nd element',
    onboarding_step2_desc: 'Combine 2 elements together to discover new creations.',
    onboarding_step3_title: 'Discover combinations!',
    onboarding_step3_desc: 'Water + Fire = Steam, Earth + Water = Mud... Find 90+ hidden elements!',
    skip: 'Skip',
    next: 'Next',
    lets_go: "Let's go!",

    tier: 'Tier',
    undiscovered: '???',
    achievement_unlocked: 'Achievement unlocked!',

    enable_sound: 'Enable sound',
    disable_sound: 'Mute sound',

    search_default: 'Search...',
    clear_search: 'Clear search',
    close: 'Close',
  },

  elements: {
    1: 'Water', 2: 'Fire', 3: 'Earth', 4: 'Air',
    5: 'Steam', 6: 'Mud', 7: 'Smoke', 8: 'Lava', 9: 'Rain', 10: 'Dust',
    11: 'Stone', 12: 'Obsidian', 13: 'Cloud', 14: 'Brick', 15: 'Plant',
    16: 'Sand', 17: 'Salt', 18: 'Ice', 19: 'Snow', 20: 'Wind',
    21: 'Storm', 22: 'River', 23: 'Ocean', 24: 'Volcano', 25: 'Island',
    26: 'Metal', 27: 'Wall', 28: 'Thunder', 29: 'Tree', 30: 'Mushroom',
    31: 'Rose', 32: 'Wheat', 33: 'Seaweed', 34: 'Mountain', 35: 'Desert',
    36: 'Forest', 37: 'Swamp', 38: 'Glacier', 39: 'Rainbow', 40: 'Sun',
    41: 'Moon', 42: 'Glass', 43: 'Coal', 44: 'Fossil', 45: 'Animal',
    46: 'Fish', 47: 'Bird',
  },

  categories: {
    1: 'Nature', 2: 'Technology', 3: 'Life', 4: 'Food', 5: 'Mythology',
  },

  achievements: {
    first_element: { name: 'First Step', desc: 'Discover your first element' },
    elements_10: { name: 'Explorer', desc: 'Discover 10 elements' },
    elements_25: { name: 'Alchemist', desc: 'Discover 25 elements' },
    elements_50: { name: 'Sage', desc: 'Discover 50 elements' },
    elements_100: { name: 'Master Alchemist', desc: 'Discover 100 elements' },
    elements_200: { name: 'Grand Sage', desc: 'Discover 200 elements' },
    elements_500: { name: 'God of Elements', desc: 'Discover all elements' },
    first_fusion: { name: 'First Fusion', desc: 'Complete your first fusion' },
    fusions_10: { name: 'Fuser', desc: '10 successful fusions' },
    fusions_50: { name: 'Fusion Expert', desc: '50 successful fusions' },
    hint_used: { name: 'Helping Hand', desc: 'Use a hint' },
    tier_5: { name: 'World Architect', desc: 'Create a tier 5 element' },
  },
}
