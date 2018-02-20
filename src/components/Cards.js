let cards = `{
  "Grand Finale": {
    "NAME": "Grand Finale",
    "DESCRIPTION": "Can only be played if there are no cards in your draw pile. NL Deal !D! damage to ALL enemies.",
	"UPGRADE_DESCRIPTION": "My draw pile NL must be #rEmpty."
  },
  "Immolate": {
    "NAME": "Immolate",
    "DESCRIPTION": "Exhaust 1 card. If the chosen card was a Status or Curse, deal !D! damage to ALL enemies."
  },
  "Regret": {
    "NAME": "Regret",
    "DESCRIPTION": "Unplayable. NL At the end of your turn, lose 1 HP for each card in your hand."
  },
  "Crippling Poison": {
    "NAME": "Crippling Poison",
    "DESCRIPTION": "Apply !M! Poison. NL Apply !M! Weak."
  },
  "A Thousand Cuts": {
    "NAME": "A Thousand Cuts",
    "DESCRIPTION": "Whenever you play a card, deal !M! damage to ALL enemies."
  },
  "Spot Weakness": {
    "NAME": "Spot Weakness",
    "DESCRIPTION": "If an enemy intends to attack, gain !M! Strength."
  },
  "Wound": {
    "NAME": "Wound",
    "DESCRIPTION": "Unplayable."
  },
  "Writhe": {
    "NAME": "Writhe",
    "DESCRIPTION": "Unplayable. NL Innate."
  },
  "Dark Shackles": {
    "NAME": "Dark Shackles",
    "DESCRIPTION": "Enemy loses !M! Strength for the rest of this turn. NL Exhaust."
  },
  "Glass Knife": {
    "NAME": "Glass Knife",
    "DESCRIPTION": "Deal !D! damage twice. Glass Knife's damage is lowered by 2 this combat."
  },
  "Cloak And Dagger": {
    "NAME": "Cloak And Dagger",
    "DESCRIPTION": "Gain !B! Block. NL Add !M! Shiv to your hand.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block. NL Add !M! Shivs to your hand."
  },
  "Underhanded Strike": {
    "NAME": "Underhanded Strike",
    "DESCRIPTION": "Unplayable. NL If this card is discarded from your hand, deal !D! damage to a random enemy.",
    "EXTENDED_DESCRIPTION": [
    	"I can't play this card."	
    ]
  },
  "Anger": {
    "NAME": "Anger",
    "DESCRIPTION": "Deal !D! damage. NL Place a copy of this card into your discard pile."
  },
  "Storm of Steel": {
    "NAME": "Storm of Steel",
    "DESCRIPTION": "Discard your hand. NL Add 1 Shiv to your hand for each card discarded.",
    "UPGRADE_DESCRIPTION": "Discard your hand. NL Add 1 upgraded Shiv to your hand for each card discarded."
  },
  "Cleave": {
    "NAME": "Cleave",
    "DESCRIPTION": "Deal !D! damage to ALL enemies."
  },
  "Inflame": {
    "NAME": "Inflame",
    "DESCRIPTION": "Gain !M! Strength."
  },
  "Wraith Form": {
    "NAME": "Wraith Form",
    "DESCRIPTION": "Whenever you play a Skill, deal !M! damage to a random enemy."
  },
  "Sadistic Nature": {
    "NAME": "Sadistic Nature",
    "DESCRIPTION": "Whenever you apply a Debuff to an enemy, they take !M! damage."
  },
  "J.A.X.": {
    "NAME": "J.A.X.",
    "DESCRIPTION": "Lose 3 HP. NL Gain !M! Strength . NL Exhaust."
  },
  "Offering": {
    "NAME": "Offering",
    "DESCRIPTION": "Lose 4 HP. NL Gain [R] [R]. NL Draw !M! cards. NL Exhaust."
  },
  "Exhume": {
    "NAME": "Exhume",
    "DESCRIPTION": "Choose an exhausted card and put it in your hand. NL Exhaust."
  },
  "Power Through": {
    "NAME": "Power Through",
    "DESCRIPTION": "Add 2 Wounds to your hand. NL Gain !B! Block."
  },
  "Dual Wield": {
    "NAME": "Dual Wield",
    "DESCRIPTION": "Create a copy of an Attack or Power card in your hand.",
    "UPGRADE_DESCRIPTION": "Create 2 copies of an Attack or Power card in your hand."
  },
  "Deadly Poison": {
    "NAME": "Deadly Poison",
    "DESCRIPTION": "Apply !M! Poison."
  },
  "Leg Sweep": {
    "NAME": "Leg Sweep",
    "DESCRIPTION": "Apply !M! Weak. NL Gain !B! Block."
  },
  "Flex": {
    "NAME": "Flex",
    "DESCRIPTION": "Gain !M! Strength. NL At the end of your turn, lose !M! Strength."
  },
  "Dagger Spray": {
    "NAME": "Dagger Spray",
    "DESCRIPTION": "Deal !D! damage to ALL enemies twice."
  },
  "Bullet Time": {
    "NAME": "Bullet Time",
    "DESCRIPTION": "You cannot draw any cards this turn. Reduce the cost of cards in your hand to 0 this turn."
  },
  "Catalyst": {
    "NAME": "Catalyst",
    "DESCRIPTION": "Double an enemy's Poison. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Triple an enemy's Poison. NL Exhaust."
  },
  "Reaper": {
    "NAME": "Reaper",
    "DESCRIPTION": "Deal !D! damage to ALL enemies. Heal for unblocked damage dealt. NL Exhaust."
  },
  "Shiv": {
    "NAME": "Shiv",
    "DESCRIPTION": "Deal !D! damage. NL Exhaust."
  },
  "Tactician": {
    "NAME": "Tactician",
    "DESCRIPTION": "Unplayable. NL If this card is discarded from your hand, gain [G].",
    "UPGRADE_DESCRIPTION": "Unplayable. NL If this card is discarded from your hand, gain [G] [G].",
    "EXTENDED_DESCRIPTION": [
    	"I can't play this card."	
    ]
  },
  "Bane": {
    "NAME": "Bane",
    "DESCRIPTION": "Deal !D! damage. NL If the enemy is Poisoned, deal !D! damage again."
  },
  "Infernal Blade": {
    "NAME": "Infernal Blade",
    "DESCRIPTION": "Add a random Attack to your hand. NL It costs 0 this turn. NL Exhaust."
  },
  "After Image": {
    "NAME": "After Image",
    "DESCRIPTION": "Whenever you play a card, gain 1 Block.",
    "UPGRADE_DESCRIPTION": "Innate. NL Whenever you play a card, gain 1 Block."
  },
  "Unload": {
    "NAME": "Unload",
    "DESCRIPTION": "Deal !D! damage. NL Discard ALL non-Attack cards."
  },
  "Blade Dance": {
    "NAME": "Blade Dance",
    "DESCRIPTION": "Add !M! Shivs to your hand."
  },
  "Deflect": {
    "NAME": "Deflect",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Trip": {
    "NAME": "Trip",
    "DESCRIPTION": "Apply !M! Vulnerable.",
    "UPGRADE_DESCRIPTION": "Apply !M! Vulnerable to ALL enemies."
  },
  "Dagger Throw": {
    "NAME": "Dagger Throw",
    "DESCRIPTION": "Deal !D! damage. NL Draw 1 card. NL Discard 1 card."
  },
  "Brutality": {
    "NAME": "Brutality",
    "DESCRIPTION": "At the start of your turn, lose 1 HP and draw 1 card.",
	"UPGRADE_DESCRIPTION": "Innate. NL At the start of your turn, lose 1 HP and draw 1 card."
  },
  "Iron Wave": {
    "NAME": "Iron Wave",
    "DESCRIPTION": "Gain !B! Block. NL Deal !D! damage."
  },
  "Reckless Charge": {
    "NAME": "Reckless Charge",
    "DESCRIPTION": "Gain 1 Vulnerable. NL Deal !D! damage."
  },
  "Decay": {
    "NAME": "Decay",
    "DESCRIPTION": "Unplayable. NL At the end of your turn, take 2 damage."
  },
  "Tools of the Trade": {
    "NAME": "Tools of the Trade",
    "DESCRIPTION": "At the start of your turn, draw 1 card and discard 1 card."
  },
  "Dramatic Entrance": {
    "NAME": "Dramatic Entrance",
    "DESCRIPTION": "Innate. NL Deal !D! damage to ALL enemies. NL Exhaust."
  },
  "Hemokinesis": {
    "NAME": "Hemokinesis",
    "DESCRIPTION": "Lose !M! HP. NL Deal !D! damage."
  },
  "Intimidate": {
    "NAME": "Intimidate",
    "DESCRIPTION": "Apply !M! Weak to ALL enemies. NL Exhaust."
  },
  "Necronomicurse": {
    "NAME": "Necronomicurse",
    "DESCRIPTION": "Unplayable. NL There is no escape from this Curse."
  },
  "Choke": {
    "NAME": "Choke",
    "DESCRIPTION": "Deal !D! damage. NL Whenever you play a card this turn, targeted enemy loses !M! HP."
  },
  "Juggernaut": {
    "NAME": "Juggernaut",
    "DESCRIPTION": "Whenever you gain Block, deal !M! damage to a random enemy."
  },
  "Caltrops": {
    "NAME": "Caltrops",
    "DESCRIPTION": "Whenever you are attacked, deal !M! damage to the attacker."
  },
  "Poisoned Stab": {
    "NAME": "Poisoned Stab",
    "DESCRIPTION": "Deal !D! damage. NL Apply !M! Poison."
  },
  "Blur": {
    "NAME": "Blur",
    "DESCRIPTION": "Gain !B! Block. NL Block is not removed at the start of your next turn."
  },
  "Body Slam": {
    "NAME": "Body Slam",
    "DESCRIPTION": "Deal damage equal to your current Block.",
    "UPGRADE_DESCRIPTION": " NL (Deals !D! damage.)"
  },
  "True Grit": {
    "NAME": "True Grit",
    "DESCRIPTION": "Gain !B! Block. NL Exhaust a random card in your hand.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block. NL Exhaust a card in your hand."
  },
  "Setup": {
    "NAME": "Setup",
    "DESCRIPTION": "Place a card from your hand on top of your draw pile. NL It costs 0 until it is played."
  },
  "Blood for Blood": {
    "NAME": "Blood for Blood",
    "DESCRIPTION": "Costs 1 less [R] NL for each time you lose HP in combat. NL Deal !D! damage."
  },
  "Impervious": {
    "NAME": "Impervious",
    "DESCRIPTION": "Gain !B! Block. NL Exhaust."
  },
  "Shrug It Off": {
    "NAME": "Shrug It Off",
    "DESCRIPTION": "Gain !B! Block. NL Draw 1 card."
  },
  "Clash": {
    "NAME": "Clash",
    "DESCRIPTION": "Can only be played if every card in your hand is an Attack. NL Deal !D! damage.",
    "EXTENDED_DESCRIPTION": [
    	"I have non-attack cards in my hand."	
    ]
  },
  "Thunderclap": {
    "NAME": "Thunderclap",
    "DESCRIPTION": "Deal !D! damage and apply 1 Vulnerable to ALL enemies."
  },
  "Flame Barrier": {
    "NAME": "Flame Barrier",
    "DESCRIPTION": "Gain !B! Block. NL Whenever you are attacked this turn, deal !M! damage to the attacker. "
  },
  "Endless Agony": {
    "NAME": "Endless Agony",
    "DESCRIPTION": "Whenever you draw this card, add a copy of it to your hand. NL Deal !D! damage. NL Exhaust."
  },
  "Berserk": {
    "NAME": "Berserk",
    "DESCRIPTION": "If your HP is at or below 50%, gain [R] at the start of each turn."
  },
  "Pummel": {
    "NAME": "Pummel",
    "DESCRIPTION": "Deal !D! damage !M! times. NL Exhaust."
  },
  "Riddle With Holes": {
    "NAME": "Riddle With Holes",
    "DESCRIPTION": "Deal !D! damage 5 times."
  },
  "Burning Pact": {
    "NAME": "Burning Pact",
    "DESCRIPTION": "Exhaust 1 card. NL Draw !M! cards."
  },
  "Metallicize": {
    "NAME": "Metallicize",
    "DESCRIPTION": "At the end of your turn, gain !M! Block."
  },
  "Pommel Strike": {
    "NAME": "Pommel Strike",
    "DESCRIPTION": "Deal !D! damage. NL Draw !M! card.",
    "UPGRADE_DESCRIPTION": "Deal !D! damage. NL Draw !M! cards."
  },
  "Pain": {
    "NAME": "Pain",
    "DESCRIPTION": "Unplayable. NL While in hand, NL lose 1 HP when other cards are played."
  },
  "Burst": {
    "NAME": "Burst",
    "DESCRIPTION": "This turn, your next Skill is played twice.",
    "UPGRADE_DESCRIPTION": "This turn, your next !M! Skills are played twice."
  },
  "Acrobatics": {
    "NAME": "Acrobatics",
    "DESCRIPTION": "Draw !M! cards. NL Discard 1 card."
  },
  "Blind": {
    "NAME": "Blind",
    "DESCRIPTION": "Apply !M! Weak.",
    "UPGRADE_DESCRIPTION": "Apply !M! Weak to ALL enemies."
  },
  "Doppelganger": {
    "NAME": "Doppelganger",
    "DESCRIPTION": "Next turn, draw X cards and gain X [G]. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Next turn, draw X+1 cards and gain X+1 [G]. NL Exhaust."
  },
  "Skewer": {
    "NAME": "Skewer",
    "DESCRIPTION": "Deal !D! damage X times."
  },
  "Envenom": {
    "NAME": "Envenom",
    "DESCRIPTION": "Whenever an Attack deals unblocked damage, apply 1 Poison."
  },
  "Adrenaline": {
    "NAME": "Adrenaline",
    "DESCRIPTION": "Gain [G]. NL Draw 2 cards. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Gain [G] [G]. NL Draw 2 cards. NL Exhaust."
  },
  "Quick Slash": {
    "NAME": "Quick Slash",
    "DESCRIPTION": "Deal !D! damage. NL Draw 1 card."
  },
  "Twin Strike": {
    "NAME": "Twin Strike",
    "DESCRIPTION": "Deal !D! damage twice."
  },
  "Parasite": {
    "NAME": "Parasite",
    "DESCRIPTION": "Unplayable. NL If transformed or removed from your deck, lose 3 Max HP"
  },
  "Bash": {
    "NAME": "Bash",
    "DESCRIPTION": "Deal !D! damage. NL Apply !M! Vulnerable."
  },
  "Clothesline": {
    "NAME": "Clothesline",
    "DESCRIPTION": "Deal !D! damage. NL Apply !M! Weak."
  },
  "Shockwave": {
    "NAME": "Shockwave",
    "DESCRIPTION": "Apply !M! Weak and Vulnerable to ALL enemies. NL Exhaust."
  },
  "Rampage": {
    "NAME": "Rampage",
    "DESCRIPTION": "Deal !D! damage. NL Every time this card is played, increase its damage by !M! for this combat."
  },
  "Bandage Up": {
    "NAME": "Bandage Up",
    "DESCRIPTION": "Heal !M! HP. NL Exhaust."
  },
 "The Bomb": {
    "NAME": "The Bomb",
    "DESCRIPTION": "Deal !D! damage to everyone (including yourself). NL Exhaust."
  },
  "Sever Soul": {
    "NAME": "Sever Soul",
    "DESCRIPTION": "Exhaust all non-Attack cards in your hand. NL Deal !D! damage."
  },
  "Whirlwind": {
    "NAME": "Whirlwind",
    "DESCRIPTION": "Deal !D! damage to ALL enemies X times."
  },
  "Warcry": {
    "NAME": "Warcry",
    "DESCRIPTION": "Draw !M! card. NL Place a card from your hand on top of your draw pile. NL Exhaust.",
	"UPGRADE_DESCRIPTION": "Draw !M! cards. NL Place a card from your hand on top of your draw pile. NL Exhaust."
  },
  "PiercingWail": {
    "NAME": "Piercing Wail",
    "DESCRIPTION": "ALL enemies lose !M! Strength for 1 turn. NL Exhaust."
  },
  "Bite": {
    "NAME": "Bite",
    "DESCRIPTION": "Deal !D! damage. NL Heal !M! HP."
  },
  "Secret Technique": {
    "NAME": "Secret Technique",
    "DESCRIPTION": "Choose a Skill from your draw pile and place it into your hand. NL Exhaust.",
	"UPGRADE_DESCRIPTION": "Choose a Skill from your draw pile and place it into your hand.",
	"EXTENDED_DESCRIPTION": [
    	"There are no Skills NL in my draw pile."
    ]
  },
  "Calculated Gamble": {
    "NAME": "Calculated Gamble",
    "DESCRIPTION": "Discard your hand, NL then draw that many cards. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Discard your hand, NL then draw that many cards."
  },
  "Combust": {
    "NAME": "Combust",
    "DESCRIPTION": "At the end of your turn, lose 1 HP and deal !M! damage to ALL enemies."
  },
  "Deep Breath": {
    "NAME": "Deep Breath",
    "DESCRIPTION": "Shuffle your discard pile into your draw pile. NL Draw !M! card.",
    "UPGRADE_DESCRIPTION": "Shuffle your discard pile into your draw pile. NL Draw !M! cards."
  },
  "Doubt": {
    "NAME": "Doubt",
    "DESCRIPTION": "Unplayable. NL At the end of your turn, gain 1 Weak."
  },
  "Escape Plan": {
    "NAME": "Escape Plan",
    "DESCRIPTION": "Draw 1 card. NL If the card is a Skill, gain !B! Block."
  },
  "Finisher": {
    "NAME": "Finisher",
    "DESCRIPTION": "Deal !D! damage for each Attack played this turn.",
    	"EXTENDED_DESCRIPTION": [
    	" NL (You have played ",
    	" Attack.)",
    	" Attacks.)"
    ]
  },
  "Dark Embrace": {
    "NAME": "Dark Embrace",
    "DESCRIPTION": "Whenever a card is exhausted, NL draw 1 card."
  },
  "Die Die Die": {
    "NAME": "Die Die Die",
    "DESCRIPTION": "Deal !D! damage to ALL enemies. NL Exhaust."
  },
  "Well Laid Plans": {
    "NAME": "Well-Laid Plans",
    "DESCRIPTION": "At the end of your turn, Retain up to !M! card.",
    "UPGRADE_DESCRIPTION": "At the end of your turn, Retain up to !M! cards."
  },
  "Defend_R": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Defend_G": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
    "Defend_B": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Seeing Red": {
    "NAME": "Seeing Red",
    "DESCRIPTION": "Gain [R] [R]. NL Exhaust."
  },
  "Disarm": {
    "NAME": "Disarm",
    "DESCRIPTION": "Enemy loses !M! Strength. NL Exhaust."
  },
  "Panache": {
    "NAME": "Panache",
    "DESCRIPTION": "Every time you play 5 cards in a single turn, deal !M! damage to ALL enemies."
  },
  "Fiend Fire": {
    "NAME": "Fiend Fire",
    "DESCRIPTION": "Exhaust your hand. NL Deal !D! damage for each exhausted card. NL Exhaust."
  },
  "Terror": {
    "NAME": "Terror",
    "DESCRIPTION": "Apply 99 Vulnerable. NL Exhaust."
  },
  "Dazed": {
    "NAME": "Dazed",
    "DESCRIPTION": "Unplayable. NL Ethereal."
  },
  "Barricade": {
    "NAME": "Barricade",
    "DESCRIPTION": "Block no longer expires at the start of your turn."
  },
  "Armaments": {
    "NAME": "Armaments",
    "DESCRIPTION": "Gain !B! Block. NL Upgrade a card in your hand for the rest of combat.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block. NL Upgrade ALL cards in your hand for the rest of combat."
  },
  "Havoc": {
    "NAME": "Havoc",
    "DESCRIPTION": "Play the top card of your draw pile and exhaust it."
  },
  "Secret Weapon": {
    "NAME": "Secret Weapon",
    "DESCRIPTION": "Choose an Attack from your draw pile and place it into your hand. NL Exhaust.",
	"UPGRADE_DESCRIPTION": "Choose an Attack from your draw pile and place it into your hand.",
	"EXTENDED_DESCRIPTION": [
    	"There are no Attacks NL in my draw pile."
    ]
  },
  "Apotheosis": {
    "NAME": "Apotheosis",
    "DESCRIPTION": "Upgrade ALL of your cards for the rest of combat. NL Exhaust."
  },
  "Feel No Pain": {
    "NAME": "Feel No Pain",
    "DESCRIPTION": "Whenever a card is exhausted, NL gain !M! Block."
  },
  "Hide": {
    "NAME": "Hide",
    "DESCRIPTION": "You cannot lose HP until the start of your next turn. NL Exhaust."
  },
  "Corruption": {
    "NAME": "Corruption",
    "DESCRIPTION": "Skills cost 0. NL Whenever you play a Skill, Exhaust it."
  },
  "Heel Hook": {
    "NAME": "Heel Hook",
    "DESCRIPTION": "Deal !D! damage. NL If the enemy is Weak, NL Gain [G] and NL draw 1 card."
  },
  "Injury": {
    "NAME": "Injury",
    "DESCRIPTION": "Unplayable."
  },
  "Rage": {
    "NAME": "Rage",
    "DESCRIPTION": "Whenever you play an Attack this turn, gain !M! Block."
  },
  "Headbutt": {
    "NAME": "Headbutt",
    "DESCRIPTION": "Deal !D! damage. NL Place a card from your discard pile on top of your draw pile."
  },
  "Limit Break": {
    "NAME": "Limit Break",
    "DESCRIPTION": "Double your Strength. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Double your Strength."
  },
  "Entrench": {
    "NAME": "Entrench",
    "DESCRIPTION": "Double your current Block.",
    "UPGRADE_DESCRIPTION": "Double your current Block."
  },
  "Noxious Fumes": {
    "NAME": "Noxious Fumes",
    "DESCRIPTION": "At the start of your turn, apply !M! Poison to ALL enemies."
  },
  "Infinite Blades": {
    "NAME": "Infinite Blades",
    "DESCRIPTION": "At the start of your turn, add a Shiv to your hand.",
    "UPGRADE_DESCRIPTION": "Innate. NL At the start of your turn, add a Shiv to your hand."
  },
  "Phantasmal Killer": {
    "NAME": "Phantasmal Killer",
    "DESCRIPTION": "On your next turn, your Attack damage is doubled."
  },
  "Malaise": {
    "NAME": "Malaise",
    "DESCRIPTION": "Enemy loses X Strength. Apply X Weak. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Enemy loses X+1 Strength. Apply X+1 Weak. NL Exhaust."
  },
  "Reflex": {
    "NAME": "Reflex",
    "DESCRIPTION": "Unplayable. NL If this card is discarded from your hand, draw !M! card.",
    "UPGRADE_DESCRIPTION": "Unplayable. NL If this card is discarded from your hand, draw !M! cards.",
    "EXTENDED_DESCRIPTION": [
    	"I can't play this card."	
    ]
  },
  "Sentinel": {
    "NAME": "Sentinel",
    "DESCRIPTION": "Gain !B! Block. NL If this card is exhausted, NL gain [R] [R].",
    "UPGRADE_DESCRIPTION": "Gain !B! Block. NL If this card is exhausted, NL gain [R] [R] [R]."
  },
  "Survivor": {
    "NAME": "Survivor",
    "DESCRIPTION": "Gain !B! Block. NL Discard a card."
  },
  "Wild Strike": {
    "NAME": "Wild Strike",
    "DESCRIPTION": "Deal !D! damage. NL Shuffle a Wound into your draw pile."
  },
  "Eviscerate": {
    "NAME": "Eviscerate",
    "DESCRIPTION": "Costs 1 less [G] NL for each card discarded this turn. NL Deal !D! damage three times."
  },
  "Flash of Steel": {
    "NAME": "Flash of Steel",
    "DESCRIPTION": "Deal !D! damage. NL Draw 1 card."
  },
  "Battle Trance": {
    "NAME": "Battle Trance",
    "DESCRIPTION": "Draw !M! cards. NL You cannot draw any additional cards this turn."
  },
  "Heavy Blade": {
    "NAME": "Heavy Blade",
    "DESCRIPTION": "Deal !D! damage. NL Strength affects Heavy Blade !M! times."
  },
  "Clumsy": {
    "NAME": "Clumsy",
    "DESCRIPTION": "Unplayable. NL Ethereal."
  },
  "Searing Blow": {
    "NAME": "Searing Blow",
    "DESCRIPTION": "Deal !D! damage. NL Can be upgraded any number of times."
  },
  "Corpse Explosion": {
    "NAME": "Corpse Explosion",
    "DESCRIPTION": "Enemy loses all Poison. Deal damage equal to twice the amount lost to ALL enemies.",
    "UPGRADE_DESCRIPTION": "Enemy loses all Poison. Deal damage equal to 3 times the amount lost to ALL enemies.",
    "EXTENDED_DESCRIPTION": [
      "That enemy isn't Poisoned."
    ]
  },
  "Second Wind": {
    "NAME": "Second Wind",
    "DESCRIPTION": "Exhaust all non-Attack cards in your hand and gain !B! Block for each."
  },
  "Enlightenment": {
    "NAME": "Enlightenment",
    "DESCRIPTION": "Reduce the cost of cards in your hand to 1 this turn.",
	"UPGRADE_DESCRIPTION": "Reduce the cost of cards in your hand to 1 this combat."
  },
  "Purity": {
    "NAME": "Purity",
    "DESCRIPTION": "Choose and Exhaust up to !M! cards in your hand. NL Exhaust."
  },
  "Panacea": {
    "NAME": "Panacea",
    "DESCRIPTION": "Gain !M! Artifact. NL Exhaust."
  },
  "Dash": {
    "NAME": "Dash",
    "DESCRIPTION": "Gain !B! Block. NL Deal !D! damage."
  },
  "Transmutation": {
    "NAME": "Transmutation",
    "DESCRIPTION": "Add X random colorless cards into your hand. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Add X random upgraded colorless cards into your hand. NL Exhaust."
  },
  "Backstab": {
    "NAME": "Backstab",
    "DESCRIPTION": "Deal !D! damage. NL Innate. NL Exhaust."
  },
  "Step Through Time": {
    "NAME": "Step Through Time",
    "DESCRIPTION": "COST: 2 Charge. NL Your HP returns to the value it was last turn. NL Exhaust."
  },
  "Feed": {
    "NAME": "Feed",
    "DESCRIPTION": "Deal !D! damage. NL If this kills a non-minion enemy, gain !M! permanent Max HP. Exhaust."
  },
  "Rupture": {
    "NAME": "Rupture",
    "DESCRIPTION": "Whenever you lose HP from a card, NL gain 1 Strength."
  },
  "Venomology": {
    "NAME": "Alchemize",
    "DESCRIPTION": "Obtain a random potion. NL Exhaust."
  },
  "Bouncing Flask": {
    "NAME": "Bouncing Flask",
    "DESCRIPTION": "Apply 3 Poison to a random enemy !M! times."
  },
  "Bludgeon": {
    "NAME": "Bludgeon",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Finesse": {
    "NAME": "Finesse",
    "DESCRIPTION": "Gain !B! Block. NL Draw 1 card."
  },
  "Slice": {
    "NAME": "Slice",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Backflip": {
    "NAME": "Backflip",
    "DESCRIPTION": "Gain !B! Block. NL Draw 2 cards."
  },
  "Outmaneuver": {
    "NAME": "Outmaneuver",
    "DESCRIPTION": "Next turn NL gain [G] [G].",
    "UPGRADE_DESCRIPTION": "Next turn NL gain [G] [G] [G]."
  },
  "Night Terror": {
    "NAME": "Nightmare",
    "DESCRIPTION": "Choose a card. NL Next turn, add !M! copies of that card into your hand. Exhaust.",
    "EXTENDED_DESCRIPTION": [
    	"I can only use NL ",
    	" NL once per turn."	
    ]
  },
  "Bloodletting": {
    "NAME": "Bloodletting",
    "DESCRIPTION": "Gain [R]. NL Lose 3 HP.",
    "UPGRADE_DESCRIPTION": "Gain [R] [R]. NL Lose 3 HP."
  },
  "Concentrate": {
    "NAME": "Concentrate",
    "DESCRIPTION": "Discard !M! cards. NL Gain [G] [G]."
  },
  "Master of Strategy": {
    "NAME": "Master of Strategy",
    "DESCRIPTION": "Draw !M! cards. NL Exhaust."
  },
  "Flechettes": {
    "NAME": "Flechettes",
    "DESCRIPTION": "Deal !D! damage for each Skill in your hand.",
	"EXTENDED_DESCRIPTION": [
    	" NL (You have ",
    	" Skill).",
    	" Skills)."
    ]
  },
  "Perfected Strike": {
    "NAME": "Perfected Strike",
    "DESCRIPTION": "Deal !D! damage. NL Deals an additional +2 damage for ALL of your cards containing \\"Strike\\".",
    "UPGRADE_DESCRIPTION": "Deal !D! damage. NL Deals an additional +3 damage for ALL of your cards containing \\"Strike\\"."
  },
  "Carnage": {
    "NAME": "Carnage",
    "DESCRIPTION": "Ethereal. NL Deal !D! damage."
  },
  "Masterful Stab": {
    "NAME": "Masterful Stab",
    "DESCRIPTION": "Can only be played if there are no other cards in your hand. NL Deal !D! damage.",
	"UPGRADE_DESCRIPTION": "This has to be my NL only card."
  },
  "Good Instincts": {
    "NAME": "Good Instincts",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Prepared": {
    "NAME": "Prepared",
    "DESCRIPTION": "Draw !M! card. NL Discard !M! card.",
    "UPGRADE_DESCRIPTION": "Draw !M! cards. NL Discard !M! cards."
  },
  "Dropkick": {
    "NAME": "Dropkick",
    "DESCRIPTION": "Deal !D! damage. NL If the enemy is Vulnerable, NL Gain [R] and NL draw 1 card."
  },
  "Swift Strike": {
    "NAME": "Swift Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Normality": {
    "NAME": "Normality",
    "DESCRIPTION": "Unplayable. NL You cannot play more than 3 cards this turn.",
    "EXTENDED_DESCRIPTION": [
    	"I can only play up to NL #r3 cards this turn.",
    	"Unplayable. NL You cannot play more than ",
    	" cards per turn.",
		" cards per turn. NL You have played ",
		" card this turn."	
    ]
  },
  "Accuracy": {
    "NAME": "Accuracy",
    "DESCRIPTION": "Shivs deal !M! additional damage."
  },
  "Sword Boomerang": {
    "NAME": "Sword Boomerang",
    "DESCRIPTION": "Deal !D! damage to a random enemy !M! times."
  },
  "Jack Of All Trades": {
    "NAME": "Jack Of All Trades",
    "DESCRIPTION": "Add !M! random colorless card to your hand. NL Exhaust."
  },
  "Demon Form": {
    "NAME": "Demon Form",
    "DESCRIPTION": "At the start of each turn, gain !M! Strength."
  },
  "Fire Breathing": {
    "NAME": "Fire Breathing",
    "DESCRIPTION": "At the end of your turn, for each Attack played this turn deal 1 damage to ALL enemies."
  },
  "Ghostly Armor": {
    "NAME": "Ghostly Armor",
    "DESCRIPTION": "Ethereal. NL Gain !B! Block."
  },
  "Uppercut": {
    "NAME": "Uppercut",
    "DESCRIPTION": "Deal !D! damage. NL Apply !M! Weak. NL Apply !M! Vulnerable."
  },
  "Mind Blast": {
    "NAME": "Mind Blast",
    "DESCRIPTION": "Deal damage equal to the number of cards in your draw pile.",
    "UPGRADE_DESCRIPTION": "Innate. NL Deal damage equal to the number of cards in your draw pile.",
    "EXTENDED_DESCRIPTION": [
      " NL (Deals !D! damage.)"
    ]
  },
  "Neutralize": {
    "NAME": "Neutralize",
    "DESCRIPTION": "Deal !D! damage. NL Apply !M! Weak."
  },
  "Strike_R": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Strike_G": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
    "Strike_B": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Evolve": {
    "NAME": "Evolve",
    "DESCRIPTION": "Shuffle 2 Wounds into your draw pile. NL Whenever you draw a Wound, draw !M! card.",
    "UPGRADE_DESCRIPTION": "Shuffle 2 Wounds into your draw pile. NL Whenever you draw a Wound, draw !M! cards."
  },
  "Burn": {
    "NAME": "Burn",
    "DESCRIPTION": "Unplayable. NL At the end of your turn, take 2 damage.",
    "UPGRADE_DESCRIPTION": "Unplayable. NL At the end of your turn, take 4 damage."
  },
  "Sucker Punch": {
    "NAME": "Sucker Punch",
    "DESCRIPTION": "Deal !D! damage. NL Apply !M! Weak."
  },
  "Double Tap": {
    "NAME": "Double Tap",
    "DESCRIPTION": "This turn, your next Attack is played twice.",
    "UPGRADE_DESCRIPTION": "This turn, your next !M! Attacks are played twice."
  },
  "Footwork": {
    "NAME": "Footwork",
    "DESCRIPTION": "Gain !M! Dexterity."
  },
  "Thinking Ahead": {
    "NAME": "Thinking Ahead",
    "DESCRIPTION": "Draw 2 cards. NL Put a card from your hand on top of your draw pile. NL Exhaust.",
    "UPGRADE_DESCRIPTION": "Draw 2 cards. NL Put a card from your hand on top of your draw pile."
  },
  "Distraction": {
    "NAME": "Distraction",
    "DESCRIPTION": "Add a random Skill to your hand. NL It costs 0 this turn. NL Exhaust."
  },
  "Dodge and Roll": {
    "NAME": "Dodge and Roll",
    "DESCRIPTION": "Gain !B! Block. NL Next turn gain !B! Block."
  },
  "All Out Attack": {
    "NAME": "All-Out Attack",
    "DESCRIPTION": "Deal !D! damage to ALL enemies. NL Draw 1 less card next turn."
  },
  "Flying Knee": {
    "NAME": "Flying Knee",
    "DESCRIPTION": "Deal !D! damage. NL Next turn gain [G]."
  },
  "Predator": {
    "NAME": "Predator",
    "DESCRIPTION": "Deal !D! damage. NL Draw 2 more cards next turn."
  },
  "Madness": {
    "NAME": "Madness",
    "DESCRIPTION": "A random card in your hand costs 0 for the rest of combat. NL Exhaust."
  },
  "Expertise": {
    "NAME": "Expertise",
    "DESCRIPTION": "Draw cards until you have !M! in hand."
  }
}
`;

cards = JSON.parse(cards);

export default cards