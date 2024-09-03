import{k as e,_ as t,$ as a,n as l,o as s,a0 as n,q as r,L as i,a1 as p,s as o,a2 as d,t as c,w as I,T as g,x as u,y as m,z as h,A as S,D as v,H as T,F as y,J as f}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as A}from"./suggest_reforges_action-W3vdySew.chunk.js";import{T as O,aF as P,S as R,a4 as C,a5 as U,a6 as k,an as w,ao as L,a7 as x,G as N,at as D,au as M,av as b,aG as F,ac as G,ad as H,ae as J,af as E,aH as z,ag as V,a as j,ah as B,aI as K,ai as Z,aJ as W,aB as Q,aj as q,ak as Y,al as X,am as $,aK as _,aC as ee,aD as te,aL as ae,aM as le,aE as se,F as ne,R as re}from"./detailed_results-CYy0djv4.chunk.js";import{s as ie}from"./apl_utils-Bwhe6-Zp.chunk.js";const pe=e({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial Rage at the start of each iteration."}),oe={inputs:[t({fieldName:"maintainFaerieFire",label:"Maintain Faerie Fire",labelTooltip:"Maintain Faerie Fire debuff. Overwrites any external Sunder effects specified in settings."}),t({fieldName:"maintainDemoralizingRoar",label:"Maintain Demo Roar",labelTooltip:"Keep Demoralizing Roar active on the primary target. If a stronger debuff is active, will not cast."}),a({fieldName:"demoTime",label:"Demo Roar refresh leeway",labelTooltip:"Refresh Demoralizing Roar when remaining duration is less than this value (in seconds). Larger values provide safety buffer against misses, but at the cost of lower DPS.",showWhen:e=>e.getSimpleRotation().maintainDemoralizingRoar}),a({fieldName:"pulverizeTime",label:"Pulverize refresh leeway",labelTooltip:"Refresh Pulverize when remaining duration is less than this value (in seconds). Note that Mangle, Thrash, and Faerie Fire usage on cooldown takes priority over this rule, unless Lacerate itself is about to fall off."}),t({fieldName:"prepullStampede",label:"Assume pre-pull Stampede",labelTooltip:"Activate Stampede Haste buff at the start of each pull. Models the effects of initiating the pull with Feral Charge.",showWhen:e=>e.getTalents().stampede>0,changeEmitter:e=>O.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},de={items:[{id:65190,enchant:4206,gems:[52294,52242],reforging:142},{id:69880,randomSuffix:-137,reforging:142},{id:65083,enchant:4198,gems:[52242],reforging:142},{id:65035,enchant:4090,reforging:142},{id:65060,enchant:4103,gems:[52242,52242],reforging:142},{id:65050,enchant:4258,gems:[0],reforging:142},{id:65073,enchant:3260,gems:[52242,0],reforging:156},{id:60231,gems:[52242,52238,52242],reforging:142},{id:65191,enchant:4127,gems:[52233,52242],reforging:142},{id:65144,enchant:4062,gems:[52233],reforging:149},{id:65367,randomSuffix:-137,reforging:142},{id:65082,reforging:142},{id:65048},{id:65109},{id:65139,enchant:4098,reforging:142},{},{id:64671,gems:[52242],reforging:149}]},ce={items:[{id:41678,enchant:4222,gems:[41339,45880]},{id:45517,gems:[40008]},{id:45245,enchant:44957,gems:[40008,40008]},{id:45496,enchant:3294,gems:[42702]},{id:45473,enchant:3832,gems:[40008,40008,40008]},{id:45611,enchant:3850,gems:[40008,0]},{id:46043,enchant:63770,gems:[40008,40008,0]},{id:46095,gems:[40008,40008,40008]},{id:45536,enchant:38373,gems:[40008,40008,40008]},{id:45232,enchant:55016,gems:[40008]},{id:45471,gems:[40091]},{id:45608,gems:[40008]},{id:45158},{id:46021},{id:45533,enchant:3870,gems:[40008,40008]},{},{id:45509}]},Ie={items:[{id:48204,enchant:3878,gems:[41339,40169]},{id:47133,gems:[49110]},{id:48207,enchant:3852,gems:[40119]},{id:47545,enchant:3294,gems:[40119]},{id:47004,enchant:3832,gems:[40119,40119,40119]},{id:45611,enchant:3850,gems:[40119,0]},{id:48203,enchant:3860,gems:[40119,0]},{id:47112,gems:[40119,40119,40119]},{id:46975,enchant:3822,gems:[40119,40119,40119]},{id:47077,enchant:4223,gems:[40119,40119]},{id:47955,gems:[40119]},{id:47075,gems:[40119]},{id:47088},{id:47131},{id:47130,enchant:3870,gems:[40119,40119]},{},{id:45509}]},ge={items:[{id:51296,enchant:3878,gems:[41380,40119]},{id:50682,gems:[40130]},{id:51299,enchant:3852,gems:[40119]},{id:50466,enchant:3294,gems:[40119]},{id:50656,enchant:3330,gems:[40119,40119,40119]},{id:50670,enchant:3850,gems:[40119,0]},{id:51295,enchant:3860,gems:[40119,0]},{id:50707,gems:[40119,40119,40119]},{id:51297,enchant:3822,gems:[40119,40119]},{id:50607,enchant:4223,gems:[40119,40119]},{id:50622,gems:[40119]},{id:50404,gems:[40119]},{id:47088},{id:50364},{id:51432,enchant:3870,gems:[40119,40119]},{},{id:50456}]},ue={type:"TypeAPL",simple:{cooldowns:{cooldowns:[],hpPercentForDefensives:.5}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:81017}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:61336}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target",index:1}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target",index:1},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target",index:1},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target",index:1}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Target"},auraId:{spellId:99},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:99},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},castSpell:{spellId:{spellId:77758},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:33878},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target",index:1}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target",index:1},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target",index:1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target",index:1},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target",index:1}}}},{action:{castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:6807},target:{type:"Target"}}}}]},me={type:"TypeAPL",simple:{cooldowns:{cooldowns:[],hpPercentForDefensives:.5}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:81017}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:61336}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Target"},auraId:{spellId:99},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:99},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:33878},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:77758},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:6807},target:{type:"Target"}}}}]},he={type:"TypeAPL",simple:{cooldowns:{hpPercentForDefensives:.5}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"7"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}}]}},castSpell:{spellId:{itemId:62471}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"8"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{not:{val:{auraIsActive:{auraId:{itemId:62471}}}}}]}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"8"}}}},{not:{val:{auraIsActive:{auraId:{spellId:22842}}}}}]}},castSpell:{spellId:{itemId:56370}}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"10"}}}}]}}]}},{not:{val:{auraIsActive:{auraId:{spellId:22842}}}}},{not:{val:{auraIsActive:{auraId:{itemId:56370}}}}}]}},castSpell:{spellId:{spellId:61336}}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"10"}}}}]}}]}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}}]}},castSpell:{spellId:{spellId:22812}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{not:{val:{auraIsActive:{auraId:{spellId:22812}}}}}]}},castSpell:{spellId:{spellId:33206,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:22812}}}}},{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}}]}},{not:{val:{auraIsActive:{auraId:{spellId:33206,tag:-1}}}}}]}},castSpell:{spellId:{itemId:56370}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:22812}}}}},{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}}]}},{not:{val:{auraIsActive:{auraId:{spellId:33206,tag:-1}}}}}]}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:80313}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:99},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:99}}}},{action:{castSpell:{spellId:{spellId:77758}}}},{action:{castSpell:{spellId:{spellId:779}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745}}}},{action:{castSpell:{spellId:{spellId:33878}}}},{action:{castSpell:{spellId:{spellId:16857}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745}}}},{action:{castSpell:{spellId:{spellId:6807}}}}]},Se=l("Pre-Raid BiS",{items:[{id:59455,enchant:4206,gems:[52294,59477,59480]},{id:60668,reforging:163},{id:60447,enchant:4198,gems:[52233],reforging:156},{id:60779,enchant:4090,reforging:163},{id:60446,enchant:4103,gems:[52242,52242],reforging:142},{id:60591,enchant:4258,gems:[0],reforging:135},{id:60443,enchant:3260,gems:[52242,0],reforging:142},{id:60589,gems:[52242,52242],reforging:135},{id:60445,enchant:4127,gems:[52242,52242],reforging:149},{id:60587,enchant:4062,gems:[52233],reforging:142},{id:62362,reforging:149},{id:68812,reforging:149},{id:56347},{id:58182},{id:69843,enchant:4098,reforging:149},{},{id:64671,gems:[52242],reforging:149}]}),ve=l("P1/P2 BiS",de),Te=l("P2",ce),ye=l("P3",Ie),fe=l("P4",ge),Ae=P.create({maintainFaerieFire:!0,maintainDemoralizingRoar:!0,demoTime:4,pulverizeTime:4,prepullStampede:!0}),Oe=s("APL Default",me),Pe=s("2-Target Cleave",ue),Re=s("AoE (Nef Adds)",he),Ce=n("Simple Default",R.SpecGuardianDruid,Ae),Ue=r("Survival",C.fromMap({[U.StatHealth]:.04,[U.StatStamina]:.99,[U.StatAgility]:1,[U.StatArmor]:1.02,[U.StatBonusArmor]:.23,[U.StatDodgeRating]:.97,[U.StatMasteryRating]:.35,[U.StatStrength]:.11,[U.StatAttackPower]:.1,[U.StatHitRating]:.27,[U.StatExpertiseRating]:.15,[U.StatCritRating]:.11,[U.StatHasteRating]:0},{[k.PseudoStatMainHandDps]:0,[k.PseudoStatPhysicalHitPercent]:.075*w,[k.PseudoStatSpellHitPercent]:.195*L})),ke=r("Balanced",C.fromMap({[U.StatHealth]:.02,[U.StatStamina]:.76,[U.StatAgility]:1,[U.StatArmor]:.62,[U.StatBonusArmor]:.14,[U.StatDodgeRating]:.59,[U.StatMasteryRating]:.2,[U.StatStrength]:.21,[U.StatAttackPower]:.2,[U.StatHitRating]:.6,[U.StatExpertiseRating]:.93,[U.StatCritRating]:.25,[U.StatHasteRating]:.03},{[k.PseudoStatMainHandDps]:.23,[k.PseudoStatPhysicalHitPercent]:.6*w})),we={name:"Standard",data:x.create({talentsString:"-2300322312310001220311-020331",glyphs:N.create({prime1:D.GlyphOfMangle,prime2:D.GlyphOfLacerate,prime3:D.GlyphOfBerserk,major1:M.GlyphOfFrenziedRegeneration,major2:M.GlyphOfMaul,major3:M.GlyphOfRebirth,minor1:b.GlyphOfDash,minor2:b.GlyphOfChallengingRoar,minor3:b.GlyphOfUnburdenedRebirth})})},Le=F.create({startingRage:15}),xe=G.create({flask:H.FlaskOfSteelskin,food:J.FoodSkeweredEel,prepopPotion:E.PotionOfTheTolvir,defaultPotion:E.PotionOfTheTolvir,defaultConjured:z.ConjuredHealthstone,tinkerHands:V.TinkerHandsSynapseSprings}),Ne={iterationCount:5e4},De=i("Single Target Dummy",{rotation:Ce,encounter:p("Single Target Dummy","http://localhost:5173/cata/druid/guardian/?i=rcmxe#eJzjEuVgdGDMYGxgZJzAyNjAxLiBifECE6MTpwCjBaMH4w1GRismAUYhBqkvjLOY2QJyEitTizjYBBiVeDmYDSQDmCKYEliBGp0YVjFzS3EKMoCBnsMJJpYLTOy3mDgFZ80EgZv2j5iaGCWYlOq4CquVchMz80qA2C0xtSgz1S2zKFXJqqSoNFUHLuOSmptflJiTWZWZlx6Un1gEk08Biodk5gLVm+goFZTmlAENqEpFiBSlAgVzgksScwtSU6Cm1gohXPGCKeUHE+NCZog7Ix26mGU5wcymKw5wRZpnz4AAl4MCm9JxJg9miIqGNAeo90QcJCFKT9pbQkQu2CumgcE1e0eI5jf2Rj1MBas+M1ZxByVmpiiEJBalp5YoREiwa91gZKAHCGhxoKZxDSnHkc3zsZg7xxFdDTg0GhZxOs5khIUlVA2LAwBf7n5L")}),Me=i("Magmaw MT",{rotation:Pe,encounter:p("Magmaw MT","http://localhost:5173/cata/druid/guardian/?i=rcmxe#eJzdVE9MHFUYn++9YZn5dtkOT6jLs+KwBEMn7WZZQCsxzkANWZO2AhqkjQcn7FIGl13KrhI5rVUjeCJeLERM6rEnw0Xl0EPTRJvYhF5a4NJGY2LS9tQL9WCceTOLu2Q10RgPfqd5v+/7/b6/GWxVwIJpKAOsAJQJfEVgi8CQqsEJSMM2wADRgEn8krpGQyM5+73svBLSIN6k0GTbCJkgbzW4xCHpCg1ztVkSlrC+J/IWadwlFeSe+SNZV2I0HmZ/QNiMIS4jiTXHG7EB6fGeIraiMhNCWXm8J8dVdOHjyURPkcmcDEisnR9BZmgKZXQXJC5Ivcku7hE2N6Cuvy/wX7pL2QQfxzQbxkgKGdGIi976mCA3YgqwpmtQBXKXidArfDKLzFS7XDUkfUWO7vvbR7LnYS/yATzGjDrKf8V234I9xC1MsgRGUxEmayQGAf+IwV1+dKYG3VeIBArCxyz+EiZ5ArV4FCMboIqUVLkYqlSxWYX5Gs/5Vex8AKKKYf4y9nG3gbiG0Q0IB0mFRlDJZg26rxIJVPxKOvgz+MQu0UQ2okzuF6x4L5EKuSKW8sUyZSpv9KatPOzeh397v4E9zZ/CpngY1Q0IIkWxV+/6A4/yiHjfXvJH2Mt7sJN1+O3XLKGOSGXuz/N+7GKdfscHZn+AVjvsaT6FE2z8bxySwburJb/ek/FJo9WdqbpZAeoeVp7n8E12ru5pADt0DWpv4x9kiwTZ/M48ptcHrd9HzfgS/Jiog/5ZHQemVtlZ5eCauPvLcDf/Wb/3/IVk9ghcpv7f4az1CX1W9b7KyVtW89g37R/dH902j04J+9Vse/fV9sMzp38y9VD8TkOailBp5YIV/F1arLa1Vc9umC/4yJbZ4ZNvm4M3f/DsgZkq07mfr5PF8Gn7/Ky9oKf69bQ+EQNjG6T/wkY+tP5NuXLmu2q9UyfWPx88GCOmUf5SHVwFf0A7ZhAjW5/CBfeoWl6ZnbNzWX0sa0+WnEJef92ZzRpn0oUFPVfIn9cXnFxOL027AbaT0Uv221m9VNADUjprZ3Qnr7+WnSzkM8WE3j04VcrOi3gn75QcO6f3JItHO/ycLVZqlcwtX6SLh4dy9qLjyp8s5Iul+XcmS/423vi/bENaMkbrb0NaemStBi3eq2xDspLwOzCwD1o=")}),be=i("Nef Adds OT",{rotation:Re,encounter:p("Nef Adds OT","http://localhost:5173/cata/druid/guardian/?i=rcmxe#eJztmF9oW1Ucx3POuc1OfulccqhrcsT1LLrRXVlI0nbrqjO3FaUMkTo6ylBkd8ktjSS5NbmdtmNQO6Q6HxRfdMMJ6ov4pGHoVnVu3cA/KHQP+2NBJnsadPNFhOKD896bP4utNlVRrnB/L7nnl9/v+/ud8/nlQC60UiSQgkbQJEKvIjSJ0QcYzWHU1xRAVxDqwQHEPPyC/xjxDmTVca1A/QEU8VESCw9gM6GPnEHofeLnvqDHtqjyJZbmMJnHVc8PyWv4MoRIxM9uuyAIXi4BDgUja6AJyNZ4kUkc93jYIN8N/ewRCMutVGK+KcnLJLr4i8QpeEGKR7uKwOUQ9bK1swgYDjSBRK8tSNwUAbQd1kb84CshM5S+cZVw8zMwfZ2wFFdhiO35e6rdS1Trlpa4VYTOlNA/a/13RUw1u/XSScKOID6N4BA7CE/wvXCXHF4uYIYCjsehh3WvVHyF3NiS6vVbNJvglZ2zCf4c5Fn2P2ulwpC+WTnenez+lev+KSlLggdhHf3oMBa3qobYQT4OOsv9JdVN/J4lysDkACWMzCMPtwe6M7YJQpH10FJCy4vW2P5LxTsaFbfH9VG+CxT2INCE5bkwje3pRPVtmM7ydHbAernFhEmfrsSWu+ss2mqnfpLYA7wHYjwKgcgd0FxCPluB0CmvrSqx5pk6Xzl7Wzn7u8OIhXkrrJvHzYBpqiYtWSsGnNphp6+as8TXWP3Ql70191svkZr7ZnvN/evzTcx8Kt8x7D6+BdrY3dAcgbrt1p2iqcIr7prEpRdvP1s97uNPwSDbvcrzknl7fYGPFyVole+0fg8zVceyM9zM77U1yR9r1jqs7vf1rus4vYjR26R8r+5VjpDNPutpcuB7Jdj2wsLjJzdcTG55Zidcfnf0ZjL83tDXifMf/pgU3siC3E/sUM8+Tancyy1K+NhRy75K7ih75pIbh227lOz99hvLbiQTZ8noqRu30MSG3nwmpxpaWvTpeU0MqYVCRi+IRJfoF1tFXOwJUfkK8vwPbTL9hVK3VI6PT/UujSmf0Il3lKPo3M/tT74yezFZjVFeQ8eRORnBh7NayijoqTFDEw/pY3lDPvTYWG6/VhD6sKj/MqUWjaIwdJHT01o2KgZ1Q82KlJUins1ks2K/JoqjBU1NC+2Als+OC/2AqWKMaELL22HmKj1WUI2MnjczjBGhioKaT+u5zIQJSB8eLmpGdGO5v5BiMZxpzDDhMnQqwxab4SeNGXa4DJ3N8NPGDDtdhs5m+Fljhl0uQ2czPN2Y4TaXobMZft6Y4XaXobMZnmnMsNtl6GyGZxsz3OEydDDDWTI6azFsW/k/fsyF6GyI51YB0X1T43CI51cB0X1V42CIvwHDxABk")}),Fe=o(R.SpecGuardianDruid,{cssClass:"guardian-druid-sim-ui",cssScheme:j.getCssClass(j.Druid),knownIssues:[],warnings:[],epStats:[U.StatHealth,U.StatStamina,U.StatAgility,U.StatArmor,U.StatBonusArmor,U.StatDodgeRating,U.StatMasteryRating,U.StatStrength,U.StatAttackPower,U.StatHitRating,U.StatExpertiseRating,U.StatCritRating,U.StatHasteRating,U.StatNatureResistance],epPseudoStats:[k.PseudoStatMainHandDps,k.PseudoStatPhysicalHitPercent,k.PseudoStatSpellHitPercent],epReferenceStat:U.StatAgility,displayStats:B.createDisplayStatArray([U.StatHealth,U.StatStamina,U.StatAgility,U.StatArmor,U.StatBonusArmor,U.StatMasteryRating,U.StatStrength,U.StatAttackPower,U.StatExpertiseRating,U.StatNatureResistance],[k.PseudoStatDodgePercent,k.PseudoStatPhysicalHitPercent,k.PseudoStatPhysicalCritPercent,k.PseudoStatMeleeHastePercent,k.PseudoStatSpellHitPercent,k.PseudoStatSpellCritPercent]),defaults:{gear:Se.gear,epWeights:Ue.epWeights,statCaps:(new C).withPseudoStat(k.PseudoStatSpellHitPercent,4),softCapBreakpoints:[K.fromStat(U.StatExpertiseRating,{breakpoints:[26*Z,56*Z],capType:W.TypeSoftCap,postCapEPs:[.47,0]}),K.fromPseudoStat(k.PseudoStatPhysicalHitPercent,{breakpoints:[5.5,8],capType:W.TypeSoftCap,postCapEPs:[.47*w,.14*w]})],other:Ne,consumes:xe,rotationType:Q.TypeSimple,simpleRotation:Ae,talents:we.data,specOptions:Le,raidBuffs:q.create({powerWordFortitude:!0,markOfTheWild:!0,bloodlust:!0,strengthOfEarthTotem:!0,abominationsMight:!0,windfuryTotem:!0,communion:!0,devotionAura:!0}),partyBuffs:Y.create({}),individualBuffs:X.create({}),debuffs:$.create({ebonPlaguebringer:!0,criticalMass:!0,bloodFrenzy:!0,frostFever:!0})},playerIconInputs:[],rotationInputs:oe,includeBuffDebuffInputs:[d,c],excludeBuffDebuffInputs:[],otherInputs:{inputs:[I,g,u,m,h,S,v,T,pe,y]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[Ue,ke],talents:[we],rotations:[Ce,Oe,Pe,Re],gear:[Se,ve],builds:[De,Me,be]},autoRotation:e=>Oe.rotation.rotation,simpleRotation:(e,t,a)=>{const[l,s]=ie(a),n=1==e.getTalents().stampede?81016:81017,r=_.fromJsonString(`{"action":{"activateAura":{"auraId":{"spellId":${n.toFixed(0)}}}},"doAtValue":{"const":{"val":"-0.1s"}}}`),i=e.getTalents().pulverize?80313:33745,p=ee.fromJsonString(`{"condition":{"and":{"vals":[{"dotIsActive":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}},{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":33745}}},"rhs":{"const":{"val":"3"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}},"rhs":{"const":{"val":"${t.pulverizeTime.toFixed(1)}s"}}}}]}},"castSpell":{"spellId":{"spellId":${i.toFixed(0)}},"target":{"type":"Target"}}}`),o=ee.fromJsonString('{"condition":{"or":{"vals":[{"not":{"val":{"auraIsActive":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":770}}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":770}}},"rhs":{"const":{"val":"6s"}}}}]}},"castSpell":{"spellId":{"spellId":16857},"target":{"type":"Target"}}}'),d=ee.fromJsonString(`{"condition":{"auraShouldRefresh":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":99},"maxOverlap":{"const":{"val":"${t.demoTime.toFixed(1)}s"}}}},"castSpell":{"spellId":{"spellId":99},"target":{"type":"Target"}}}`),c=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":50334}}}'),I=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":5229}}}'),g=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":82174}}}'),u=ee.fromJsonString('{"condition":{"and":{"vals":[{"not":{"val":{"dotIsActive":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}}}},{"not":{"val":{"auraIsActive":{"auraId":{"spellId":50334}}}}}]}},"castSpell":{"spellId":{"spellId":33745},"target":{"type":"Target"}}}'),m=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":33878},"target":{"type":"Target"}}}'),h=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":77758},"target":{"type":"Target"}}}'),S=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":16857},"target":{"type":"Target"}}}'),v=ee.fromJsonString(`{"condition":{"and":{"vals":[{"dotIsActive":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}},{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":33745}}},"rhs":{"const":{"val":"3"}}}},{"or":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":80951}}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"auraId":{"spellId":80951}}},"rhs":{"const":{"val":"${t.pulverizeTime.toFixed(1)}s"}}}}]}}]}},"castSpell":{"spellId":{"spellId":80313},"target":{"type":"Target"}}}`),T=ee.fromJsonString('{"condition":{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":33745}}},"rhs":{"const":{"val":"3"}}}},"castSpell":{"spellId":{"spellId":33745},"target":{"type":"Target"}}}'),y=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":6807},"target":{"type":"Target"}}}');return l.push(...[t.prepullStampede?r:null].filter((e=>e))),s.push(...[p,t.maintainFaerieFire?o:null,t.maintainDemoralizingRoar?d:null,c,I,g,u,m,h,S,v,T,y].filter((e=>e))),te.create({simple:ae.create({cooldowns:le.create({hpPercentForDefensives:a.hpPercentForDefensives})}),prepullActions:l,priorityList:s.map((e=>se.create({action:e})))})},raidSimPresets:[{spec:R.SpecGuardianDruid,talents:we.data,specOptions:Le,consumes:xe,defaultFactionRaces:{[ne.Unknown]:re.RaceUnknown,[ne.Alliance]:re.RaceNightElf,[ne.Horde]:re.RaceTauren},defaultGear:{[ne.Unknown]:{},[ne.Alliance]:{1:ve.gear,2:Te.gear,3:ye.gear,4:fe.gear},[ne.Horde]:{1:ve.gear,2:Te.gear,3:ye.gear,4:fe.gear}},otherDefaults:Ne}]});class Ge extends f{constructor(e,t){super(e,t,Fe),t.sim.waitForInit().then((()=>{new A(this)}))}}export{Ge as G};