import{n as e,o as t,q as a,K as l,L as s,s as n,t as o,N as i,O as r,v as d,w as p,G as c,J as u}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as I}from"./suggest_reforges_action-W3vdySew.chunk.js";import{a4 as h,a5 as g,a6 as m,an as S,ao as f,a7 as v,G as y,a8 as O,a9 as P,aa as A,ap as R,b as T,ac as w,ad as G,ae as H,af as k,ag as C,aq as D,ar as B,a as F,ah as b,ai as x,aj as E,ak as M,al as L,am as W,S as q,F as j,R as V}from"./detailed_results-CYy0djv4.chunk.js";const U={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48265}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:57330}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}}]}},castSpell:{spellId:{spellId:77575}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},castSpell:{spellId:{spellId:45462,tag:1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59052}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{castSpell:{spellId:{spellId:46584}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneBlood"}},rhs:{const:{val:"0"}}}},castSpell:{spellId:{spellId:45529}}}},{action:{castSpell:{spellId:{spellId:57330}}}}]},K={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48265}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:57330}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}}]}},castSpell:{spellId:{spellId:77575}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:45477}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},castSpell:{spellId:{spellId:45462,tag:1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59052}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{castSpell:{spellId:{spellId:46584}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneBlood"}},rhs:{const:{val:"0"}}}},castSpell:{spellId:{spellId:45529}}}},{action:{castSpell:{spellId:{spellId:57330}}}}]},Y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48265}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{spellId:57330}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{auraIsActive:{auraId:{spellId:53365}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:96229}}},rhs:{const:{val:"2s"}}}},{auraIsActive:{auraId:{itemId:62469}}},{auraIsActive:{auraId:{itemId:58146}}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"5.5s"}}}}]}},castSpell:{spellId:{spellId:45529}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"105"}}}}]}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{or:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}}]}},castSpell:{spellId:{spellId:77575}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59052}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:45462,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentRunicPower:{}},rhs:{const:{val:"100"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"2"}}}},{dotIsActive:{spellId:{spellId:55078}}}]}},castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51124}}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:57330}}}}},castSpell:{spellId:{spellId:57330}}}},{action:{castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{auraIsActive:{auraId:{spellId:53365}}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{castSpell:{spellId:{spellId:57330}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"2.5s"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"2.5s"}}}}]}},castSpell:{spellId:{spellId:45462,tag:1}}}}]},_={items:[{id:65130,enchant:4208,gems:[68779,52213]},{id:65025,reforging:138},{id:65183,enchant:4202,gems:[52206]},{id:65117,enchant:4100},{id:65179,enchant:4102,gems:[52206,52213]},{id:65085,enchant:4256,gems:[0]},{id:65180,enchant:4106,gems:[52235,0]},{id:65040,gems:[52206,52206],reforging:138},{id:65182,enchant:4126,gems:[52206,52206]},{id:65075,gems:[52206]},{id:65106,enchant:4078},{id:60226,enchant:4078,gems:[52214],reforging:145},{id:65072,reforging:160},{id:65118},{id:65003,enchant:3368,reforging:140},{},{id:64674,gems:[52206],reforging:145}]},z={items:[{id:65181,enchant:4208,gems:[68779,52214],reforging:161},{id:69885,randomSuffix:-118,reforging:151},{id:65183,enchant:4202,gems:[52255],reforging:154},{id:69879,randomSuffix:-118,enchant:4100,reforging:151},{id:65179,enchant:4102,gems:[52255,52213],reforging:154},{id:60228,enchant:4256,gems:[52206,0],reforging:147},{id:65180,enchant:4106,gems:[52206,0],reforging:151},{id:65369,randomSuffix:-223,gems:[52206,52206],reforging:151},{id:65379,randomSuffix:-176,enchant:4126,gems:[52255,52213],reforging:151},{id:65075,enchant:4069,gems:[52213],reforging:158},{id:60226,gems:[52206],reforging:144},{id:65382,randomSuffix:-118,reforging:151},{id:62469},{id:65072,reforging:161},{id:68131,randomSuffix:-118,enchant:3370,reforging:151},{id:65047,enchant:3368,reforging:154},{id:64674,gems:[52206],reforging:158}]},J={onLoad:e=>{l([{condition:e=>e.getEquippedItem(D.ItemSlotMainHand)?.item.handType===B.HandTypeTwoHand,message:"Check your gear: You have a two-handed weapon equipped, but the selected option is for dual wield."},{condition:e=>!e.getTalents().threatOfThassarian,message:"Check your talents: You have selected a dual-wield spec but don't have [Threat Of Thassarian] talented."}],e)}},N={onLoad:e=>{l([{condition:e=>e.getEquippedItem(D.ItemSlotMainHand)?.item.handType===B.HandTypeOneHand,message:"Check your gear: You have a one-handed weapon equipped, but the selected option is for dual wield"},{condition:e=>!e.getTalents().mightOfTheFrozenWastes,message:"Check your talents: You have selected a two-handed spec but don't have [Might of the Frozen Wastes] talented"}],e)}},Q=e("P1 Dual Wield",{items:[{id:65181,enchant:4208,gems:[68779,52214],reforging:159},{id:69885,randomSuffix:-122},{id:65183,enchant:4202,gems:[52255]},{id:65117,enchant:4100,reforging:144},{id:65179,enchant:4102,gems:[52255,52213]},{id:65085,enchant:4256,gems:[0],reforging:137},{id:65180,gems:[52213,0],reforging:166},{id:65369,randomSuffix:-222,gems:[52214,52206]},{id:65379,randomSuffix:-175,enchant:4126,gems:[52255,52213]},{id:65075,gems:[52206]},{id:60226,gems:[52214],reforging:167},{id:65382,randomSuffix:-122},{id:58180},{id:59224},{id:65047,enchant:3370},{id:65047,enchant:3368},{id:64674,gems:[0],reforging:160}]},J),X=e("P1 Two Hand",_,N),Z=e("P1 Masterfrost",z,J),$=t("Dual Wield",K,J),ee=t("Two Hand",U,N),te=t("Masterfrost",Y,J),ae=a("P1 Masterfrost",h.fromMap({[g.StatStrength]:2.86,[g.StatArmor]:.03,[g.StatAttackPower]:1,[g.StatExpertiseRating]:.75,[g.StatHasteRating]:1.38,[g.StatHitRating]:1.67,[g.StatCritRating]:1.07,[g.StatMasteryRating]:1.41},{[m.PseudoStatMainHandDps]:4.5,[m.PseudoStatOffHandDps]:2.84,[m.PseudoStatPhysicalHitPercent]:1.08*S,[m.PseudoStatSpellHitPercent]:.59*f}),J),le={name:"Dual Wield",data:v.create({talentsString:"2032-20330022233112012301-003",glyphs:y.create({prime1:O.GlyphOfFrostStrike,prime2:O.GlyphOfObliterate,prime3:O.GlyphOfHowlingBlast,major1:P.GlyphOfPestilence,major2:P.GlyphOfBloodBoil,major3:P.GlyphOfDarkSuccor,minor1:A.GlyphOfDeathGate,minor2:A.GlyphOfPathOfFrost,minor3:A.GlyphOfHornOfWinter})}),...J},se={name:"Two Hand",data:v.create({talentsString:"103-32030022233112012031-033",glyphs:y.create({prime1:O.GlyphOfFrostStrike,prime2:O.GlyphOfObliterate,prime3:O.GlyphOfHowlingBlast,major1:P.GlyphOfPestilence,major2:P.GlyphOfBloodBoil,major3:P.GlyphOfDarkSuccor,minor1:A.GlyphOfDeathGate,minor2:A.GlyphOfPathOfFrost,minor3:A.GlyphOfHornOfWinter})}),...N},ne={name:"Masterfrost",data:v.create({talentsString:"2032-20330022233112012301-03",glyphs:y.create({prime1:O.GlyphOfFrostStrike,prime2:O.GlyphOfObliterate,prime3:O.GlyphOfHowlingBlast,major1:P.GlyphOfPestilence,major2:P.GlyphOfBloodBoil,major3:P.GlyphOfDarkSuccor,minor1:A.GlyphOfDeathGate,minor2:A.GlyphOfPathOfFrost,minor3:A.GlyphOfHornOfWinter})}),...J},oe=R.create({classOptions:{startingRunicPower:0,petUptime:1}}),ie={profession1:T.Engineering,profession2:T.Enchanting,distanceFromTarget:5},re=w.create({flask:G.FlaskOfTitanicStrength,food:H.FoodBeerBasedCrocolisk,defaultPotion:k.GolembloodPotion,prepopPotion:k.GolembloodPotion,tinkerHands:C.TinkerHandsSynapseSprings}),de=s("Dual Wield",{gear:Q,talents:le,rotation:$}),pe=s("Two Hand",{gear:X,talents:se,rotation:ee}),ce=s("Masterfrost",{gear:Z,talents:ne,rotation:te}),ue=n(q.SpecFrostDeathKnight,{cssClass:"frost-death-knight-sim-ui",cssScheme:F.getCssClass(F.DeathKnight),knownIssues:[],epStats:[g.StatStrength,g.StatArmor,g.StatAttackPower,g.StatExpertiseRating,g.StatHitRating,g.StatCritRating,g.StatHasteRating,g.StatMasteryRating],epPseudoStats:[m.PseudoStatMainHandDps,m.PseudoStatOffHandDps,m.PseudoStatPhysicalHitPercent,m.PseudoStatSpellHitPercent],epReferenceStat:g.StatAttackPower,displayStats:b.createDisplayStatArray([g.StatHealth,g.StatArmor,g.StatStrength,g.StatAttackPower,g.StatMasteryRating,g.StatExpertiseRating],[m.PseudoStatSpellHitPercent,m.PseudoStatSpellCritPercent,m.PseudoStatPhysicalHitPercent,m.PseudoStatPhysicalCritPercent,m.PseudoStatMeleeHastePercent]),defaults:{gear:Z.gear,epWeights:ae.epWeights,statCaps:(()=>{const e=(new h).withPseudoStat(m.PseudoStatPhysicalHitPercent,8),t=(new h).withPseudoStat(m.PseudoStatSpellHitPercent,17),a=(new h).withStat(g.StatExpertiseRating,26*x);return e.add(t.add(a))})(),other:ie,consumes:re,talents:ne.data,specOptions:oe,raidBuffs:E.create({devotionAura:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,leaderOfThePack:!0,powerWordFortitude:!0,hornOfWinter:!0,abominationsMight:!0,arcaneTactics:!0}),partyBuffs:M.create({heroicPresence:!1}),individualBuffs:L.create({}),debuffs:W.create({sunderArmor:!0,brittleBones:!0,ebonPlaguebringer:!0,shadowAndFlame:!0})},autoRotation:e=>(e.sim.encounter.targets.length,te.rotation.rotation),playerIconInputs:[],petConsumeInputs:[],includeBuffDebuffInputs:[o],excludeBuffDebuffInputs:[i,r,d],otherInputs:{inputs:[p,c]},itemSwapSlots:[D.ItemSlotMainHand,D.ItemSlotOffHand],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[ae],talents:[le,se,ne],rotations:[$,ee,te],gear:[Q,X,Z],builds:[de,pe,ce]},raidSimPresets:[{spec:q.SpecFrostDeathKnight,talents:le.data,specOptions:oe,consumes:re,defaultFactionRaces:{[j.Unknown]:V.RaceUnknown,[j.Alliance]:V.RaceHuman,[j.Horde]:V.RaceTroll},defaultGear:{[j.Unknown]:{},[j.Alliance]:{1:Q.gear,2:Q.gear,3:Q.gear,4:Q.gear},[j.Horde]:{1:Q.gear,2:Q.gear,3:Q.gear,4:Q.gear}},otherDefaults:ie}]});class Ie extends u{constructor(e,t){super(e,t,ue),t.sim.waitForInit().then((()=>{new I(this)}))}}export{Ie as F};
