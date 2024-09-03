import{l as e,_ as t,n as a,a0 as s,o as n,q as l,a4 as i,a5 as o,s as r,X as p,t as c,w as d,Z as g,T as u,F as S,G as m,J as h}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as f}from"./suggest_reforges_action-W3vdySew.chunk.js";import{aO as I,aP as y,T as v,aQ as P,S as A,a4 as O,a5 as T,a6 as R,a7 as k,G as w,aR as b,aS as B,aT as C,H,ac as D,af as M,ad as W,ae as F,b as E,a as G,ah as x,aj as J,ak as j,al as N,am as L,aC as V,aD as U,aE as _,F as K,R as q}from"./detailed_results-CYy0djv4.chunk.js";import{s as z}from"./apl_utils-Bwhe6-Zp.chunk.js";import{s as Q,P as X,a as Z,A as $,N as Y}from"./shared-DWqY6wvh.chunk.js";const ee={inputs:[e({fieldName:"type",label:"Type",values:[{name:"Single Target",value:I.SingleTarget},{name:"AOE",value:I.Aoe}]}),e({fieldName:"sting",label:"Sting",labelTooltip:"Maintains the selected Sting on the primary target.",values:[{name:"None",value:y.NoSting},{name:"Serpent Sting",value:y.SerpentSting}],showWhen:e=>e.getSimpleRotation().type==I.SingleTarget}),t({fieldName:"trapWeave",label:"Trap Weave",labelTooltip:"Uses Explosive Trap at appropriate times. Note that selecting this will disable Black Arrow because they share a CD."}),t({fieldName:"multiDotSerpentSting",label:"Multi-Dot Serpent Sting",labelTooltip:"Casts Serpent Sting on multiple targets",changeEmitter:e=>v.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:2643}}}},{action:{castSpell:{spellId:{spellId:13812}}}},{action:{castSpell:{spellId:{spellId:77767}}}}]},ae={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:13165}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{spellId:1130}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}},doAtValue:{const:{val:"-1s"}}},{action:{},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Pet",owner:{type:"Self"}},auraId:{spellId:19622}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:82692}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:82692}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"60"}}}},castSpell:{spellId:{spellId:19574}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:1978}}}}},castSpell:{spellId:{spellId:1978}}}},{action:{castSpell:{spellId:{spellId:53351}}}},{action:{castSpell:{spellId:{spellId:3045}}}},{action:{castSpell:{spellId:{spellId:34026}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentFocus:{}},rhs:{const:{val:"37"}}}},castSpell:{spellId:{spellId:82726}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"59"}}}},{auraIsActive:{auraId:{spellId:19574}}}]}},castSpell:{spellId:{spellId:3044}}}},{action:{castSpell:{spellId:{spellId:77767}}}}]},se={items:[{id:65206,enchant:4209,gems:[68778,52209],reforging:165},{id:69880,randomSuffix:-135,reforging:151},{id:65208,enchant:4204,gems:[52212],reforging:166},{id:69884,randomSuffix:-135,enchant:1099},{id:65204,enchant:4102,gems:[52212,52220]},{id:65028,enchant:4258,gems:[52212]},{id:65205,enchant:3222,gems:[52212,52212]},{id:65132,gems:[52212,52212]},{id:60230,enchant:3823,gems:[52212,52220,52209]},{id:65063,enchant:4105,gems:[52220]},{id:65082},{id:65367,randomSuffix:-133},{id:65140},{id:65026},{id:65139,enchant:4227,reforging:167},{},{id:65058,enchant:4175,reforging:167}]},ne=a("BM PreRaid Preset",{items:[{id:59456,enchant:4209,gems:[68778,59478,59493]},{id:52350,gems:[52212]},{id:64712,enchant:4204,gems:[52212],reforging:152},{id:56315,enchant:1099},{id:56564,enchant:4063,gems:[52258],reforging:152},{id:63479,enchant:4071,gems:[0]},{id:64709,enchant:3222,gems:[52212,0],reforging:137},{id:56539,gems:[52212,52212],reforging:165},{id:56386,enchant:4126,gems:[52258,52258]},{id:62385,enchant:4076,gems:[52212],reforging:166},{id:52348,gems:[52212],reforging:167},{id:62362,reforging:166},{id:68709,reforging:166},{id:56328,reforging:137},{id:55066,enchant:4227,reforging:165},{},{id:59367,enchant:4175,gems:[52212],reforging:151}]}),le=a("BM P1 Preset",se),ie=P.create({type:I.SingleTarget,sting:y.SerpentSting,trapWeave:!0,multiDotSerpentSting:!0,allowExplosiveShotDownrank:!0}),oe=s("Simple Default",A.SpecBeastMasteryHunter,ie),re=n("BM",ae),pe=n("AOE",te),ce=l("BM P1",O.fromMap({[T.StatStamina]:.5,[T.StatAgility]:2.65,[T.StatRangedAttackPower]:1,[T.StatHitRating]:2.12,[T.StatCritRating]:1.19,[T.StatHasteRating]:.97,[T.StatMasteryRating]:.55},{[R.PseudoStatRangedDps]:6.32})),de={name:"Beast Mastery",data:k.create({talentsString:"2330230311320112121-2302-03",glyphs:w.create({prime1:b.GlyphOfArcaneShot,prime2:b.GlyphOfKillCommand,prime3:b.GlyphOfKillShot,major1:B.GlyphOfBestialWrath,major2:B.GlyphOfRaptorStrike,major3:B.GlyphOfTrapLauncher})})},ge=C.create({classOptions:{petUptime:1,useHuntersMark:!0,petType:H.Wolf,petTalents:{serpentSwiftness:2,dash:!0,bloodthirsty:1,spikedCollar:3,boarsSpeed:!0,cullingTheHerd:3,charge:!0,spidersBite:3,rabid:!0,callOfTheWild:!0,sharkAttack:2,wildHunt:2}}}),ue=D.create({defaultPotion:M.PotionOfTheTolvir,prepopPotion:M.PotionOfTheTolvir,flask:W.FlaskOfTheWinds,defaultConjured:i.value,food:F.FoodSeafoodFeast,tinkerHands:o.value}),Se={distanceFromTarget:24,duration:240,durationVariation:20,profession1:E.Engineering,profession2:E.Jewelcrafting},me=r(A.SpecBeastMasteryHunter,{cssClass:"beast-mastery-hunter-sim-ui",cssScheme:G.getCssClass(G.Hunter),knownIssues:[],warnings:[],epStats:[T.StatStamina,T.StatIntellect,T.StatAgility,T.StatRangedAttackPower,T.StatHitRating,T.StatCritRating,T.StatHasteRating,T.StatMP5,T.StatMasteryRating],epPseudoStats:[R.PseudoStatRangedDps],epReferenceStat:T.StatRangedAttackPower,displayStats:x.createDisplayStatArray([T.StatHealth,T.StatStamina,T.StatAgility,T.StatRangedAttackPower,T.StatMasteryRating],[R.PseudoStatPhysicalHitPercent,R.PseudoStatPhysicalCritPercent,R.PseudoStatRangedHastePercent]),modifyDisplayStats:e=>Q(e),defaults:{gear:le.gear,epWeights:ce.epWeights,statCaps:(new O).withPseudoStat(R.PseudoStatPhysicalHitPercent,8),other:Se,consumes:ue,talents:de.data,specOptions:ge,raidBuffs:J.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:j.create({}),individualBuffs:N.create({vampiricTouch:!0}),debuffs:L.create({sunderArmor:!0,curseOfElements:!0,savageCombat:!0,bloodFrenzy:!0})},playerIconInputs:[X()],rotationInputs:ee,petConsumeInputs:[],includeBuffDebuffInputs:[p,c],excludeBuffDebuffInputs:[],otherInputs:{inputs:[Z(),$(),Y(),d,g,u,S,m]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[ce],talents:[de],rotations:[oe,re,pe],gear:[ne,le]},autoRotation:e=>e.sim.encounter.targets.length>=4?pe.rotation.rotation:re.rotation.rotation,simpleRotation:(e,t,a)=>{const[s,n]=z(a),l=V.fromJsonString('{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}'),i=V.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6s"}}}},"multidot":{"spellId":{"spellId":49001},"maxDots":${t.multiDotSerpentSting?3:1},"maxOverlap":{"const":{"val":"0ms"}}}}`),o=V.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":3043},"maxOverlap":{"const":{"val":"0ms"}}}},"castSpell":{"spellId":{"spellId":3043}}}'),r=V.fromJsonString('{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":49067}}}}},"castSpell":{"spellId":{"tag":1,"spellId":49067}}}'),p=V.fromJsonString('{"castSpell":{"spellId":{"spellId":58434}}}'),c=V.fromJsonString('{"castSpell":{"spellId":{"spellId":61006}}}'),d=V.fromJsonString('{"castSpell":{"spellId":{"spellId":49050}}}'),g=V.fromJsonString('{"castSpell":{"spellId":{"spellId":49048}}}'),u=V.fromJsonString('{"castSpell":{"spellId":{"spellId":49052}}}');return t.type==I.Aoe?n.push(...[l,t.sting==y.ScorpidSting?o:null,t.sting==y.SerpentSting?i:null,t.trapWeave?r:null,p].filter((e=>e))):n.push(...[l,c,t.trapWeave?r:null,t.sting==y.ScorpidSting?o:null,t.sting==y.SerpentSting?i:null,d,g,u].filter((e=>e))),U.create({prepullActions:s,priorityList:n.map((e=>_.create({action:e})))})},raidSimPresets:[{spec:A.SpecBeastMasteryHunter,talents:de.data,specOptions:ge,consumes:ue,defaultFactionRaces:{[K.Unknown]:q.RaceUnknown,[K.Alliance]:q.RaceWorgen,[K.Horde]:q.RaceOrc},defaultGear:{[K.Unknown]:{},[K.Alliance]:{1:ne.gear},[K.Horde]:{1:ne.gear}},otherDefaults:Se}]});class he extends h{constructor(e,t){super(e,t,me),t.sim.waitForInit().then((()=>{new f(this)}))}}export{he as B};
