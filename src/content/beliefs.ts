import type { IconName } from "@/components/ui/Icon";

export interface Belief {
  id: string;
  icon: IconName;
  number: string;
  title: string;
  body: string;
  verses: { text: string; ref: string }[];
}

export const beliefs: Belief[] = [
  {
    id: "scripture",
    icon: "BookOpen",
    number: "01",
    title: "The Holy Scriptures",
    body: "We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God. They are wholly trustworthy, inerrant in the original writings, and the supreme and final authority in all matters of faith and practice. The Bible is our sole authority — we hold no creed, confession, or tradition of men above it.",
    verses: [
      { text: "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.", ref: "2 Timothy 3:16" },
      { text: "For the word of God is living and powerful, and sharper than any two-edged sword.", ref: "Hebrews 4:12" },
    ],
  },
  {
    id: "godhead",
    icon: "Sparkles",
    number: "02",
    title: "The Godhead",
    body: "We believe in one Triune God, eternally existing in three Persons — Father, Son, and Holy Spirit — co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections. In the unity of the Godhead there are three Persons of one substance, power, and eternity.",
    verses: [
      { text: "For there are three that bear witness in heaven: the Father, the Word, and the Holy Spirit; and these three are one.", ref: "1 John 5:7" },
      { text: "Hear, O Israel: The LORD our God, the LORD is one!", ref: "Deuteronomy 6:4" },
    ],
  },
  {
    id: "christ",
    icon: "Crown",
    number: "03",
    title: "The Person & Work of Christ",
    body: "We believe that the Lord Jesus Christ, the eternal Son of God, became man without ceasing to be God, having been conceived by the Holy Spirit and born of the virgin Mary. He accomplished our redemption through His finished work on the cross as a representative, vicarious, substitutionary sacrifice. Our justification is made sure by His literal, physical resurrection from the dead. He ascended to Heaven and is now exalted at the right hand of God as our High Priest, Intercessor, and Advocate.",
    verses: [
      { text: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.", ref: "John 3:16" },
      { text: "Who was delivered up because of our offenses, and was raised because of our justification.", ref: "Romans 4:25" },
    ],
  },
  {
    id: "spirit",
    icon: "Flame",
    number: "04",
    title: "The Person & Work of the Holy Spirit",
    body: "We believe that the Holy Spirit is a divine Person who reproves the world of sin, of righteousness, and of judgment. He is the supernatural agent in regeneration, baptizing all believers into the body of Christ, indwelling and sealing them unto the day of redemption. He fills believers who yield to Him and empowers them for godly living and effective service.",
    verses: [
      { text: "Do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own?", ref: "1 Corinthians 6:19" },
      { text: "But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things.", ref: "John 14:26" },
    ],
  },
  {
    id: "man",
    icon: "Eye",
    number: "05",
    title: "The Fall of Man",
    body: "We believe that man was created in the image and likeness of God, but that in Adam's sin the human race fell, inherited a sinful nature, and became alienated from God. Man is, of himself, utterly unable to remedy his lost condition. All have sinned and fall short of the glory of God, and there is none righteous — no, not one.",
    verses: [
      { text: "For all have sinned and fall short of the glory of God.", ref: "Romans 3:23" },
      { text: "Therefore, just as through one man sin entered the world, and death through sin, and thus death spread to all men.", ref: "Romans 5:12" },
    ],
  },
  {
    id: "salvation",
    icon: "Heart",
    number: "06",
    title: "Salvation by Grace Through Faith",
    body: "We believe that salvation is by grace alone, through faith alone, in Christ alone. Men are justified by faith and are accounted righteous before God only through the merit of our Lord and Saviour Jesus Christ. Salvation is the gift of God — not of works, lest any man should boast. All the redeemed, once saved, are kept by God's power and are thus eternally secure in Christ forever.",
    verses: [
      { text: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.", ref: "Ephesians 2:8–9" },
      { text: "Most assuredly, I say to you, he who hears My word and believes in Him who sent Me has everlasting life, and shall not come into judgement.", ref: "John 5:24" },
    ],
  },
  {
    id: "church",
    icon: "Users",
    number: "07",
    title: "The Church",
    body: "We believe that the Church, which is the body and the espoused bride of Christ, is a spiritual organism made up of all born-again persons of this present age. Locally, believers gather simply to the name of the Lord Jesus Christ, owning no denominational name, acknowledging no head but Christ, and no authority but the Scriptures. We believe in the autonomy of the local assembly, free of any external ecclesiastical authority or control.",
    verses: [
      { text: "For where two or three are gathered together in My name, I am there in the midst of them.", ref: "Matthew 18:20" },
      { text: "And He put all things under His feet, and gave Him to be head over all things to the church.", ref: "Ephesians 1:22" },
    ],
  },
  {
    id: "ordinances",
    icon: "Cross",
    number: "08",
    title: "Baptism & the Lord's Supper",
    body: "We recognise two ordinances as instituted by the Lord: Baptism by immersion in water as an outward testimony of an inward work of grace — a picture of the believer's identification with Christ in His death, burial, and resurrection; and the Lord's Supper, a weekly remembrance of His death. On the first day of each week, believers gather to break bread and drink the cup, showing forth His death till He comes — led by the Holy Spirit, not by human arrangement.",
    verses: [
      { text: "For as often as you eat this bread and drink this cup, you proclaim the Lord's death till He comes.", ref: "1 Corinthians 11:26" },
      { text: "Then those who gladly received his word were baptized; and that day about three thousand souls were added to them.", ref: "Acts 2:41" },
    ],
  },
  {
    id: "separation",
    icon: "Shield",
    number: "09",
    title: "Separation & Holiness",
    body: "We believe that all the saved should live in such a manner as not to bring reproach upon their Saviour and Lord. We are called to live separated lives, holy unto the Lord — not conformed to the world, but transformed by the renewing of our minds through the Word of God. The priesthood of all believers means every born-again Christian has direct access to God through Christ our Great High Priest.",
    verses: [
      { text: "And do not be conformed to this world, but be transformed by the renewing of your mind.", ref: "Romans 12:1–2" },
      { text: "But you are a chosen generation, a royal priesthood, a holy nation, His own special people.", ref: "1 Peter 2:9" },
    ],
  },
  {
    id: "return",
    icon: "Globe",
    number: "10",
    title: "The Return of Christ",
    body: "We believe in the personal, imminent return of the Lord Jesus Christ for His Church. He will rapture His Church — the dead in Christ shall rise first, and living believers shall be caught up together with them to meet the Lord in the air. Thereafter, Christ will return in power and great glory to establish His kingdom on earth. Everyone will be resurrected — the saved to eternal life in the presence of God, and the unsaved to judgement and everlasting punishment.",
    verses: [
      { text: "Men of Galilee, why do you stand gazing up into heaven? This same Jesus, who was taken up from you into heaven, will so come in like manner as you saw Him go into heaven.", ref: "Acts 1:11" },
      { text: "For the Lord Himself will descend from heaven with a shout… and the dead in Christ will rise first.", ref: "1 Thessalonians 4:16" },
    ],
  },
];

export const distinctives = [
  {
    title: "Gathered to His Name Alone",
    text: "We meet in the name of the Lord Jesus Christ alone — owning no denominational name, creed, or humanly devised system of church government. We recognise no central ecclesiastical authority and no prescribed liturgy.",
    ref: "Matthew 18:20",
  },
  {
    title: "The Breaking of Bread — First Day",
    text: "Every Lord's Day, believers gather to break bread and drink the cup in remembrance of Christ's death, as the early church did — led by the Holy Spirit without a fixed order of service.",
    ref: "Acts 20:7; 1 Corinthians 11:23–26",
  },
  {
    title: "No Ordained or Salaried Ministry",
    text: "All believers are priests before God. Ministry is exercised by gifted brethren as the Holy Spirit leads — there is no humanly ordained pastor or clergy system, nor any salaried ministry.",
    ref: "1 Peter 2:5, 9; 1 Corinthians 14:26",
  },
  {
    title: "Autonomy of the Local Assembly",
    text: "Each assembly is self-governing under the headship of Christ, guided by elders who care for the flock — without any external denominational authority or control.",
    ref: "Acts 14:23; Acts 20:28; 1 Peter 5:1–4",
  },
  {
    title: "The Priesthood of All Believers",
    text: "Every born-again believer has direct access to God through Christ our Great High Priest. We need no human mediator — we come boldly to the throne of grace.",
    ref: "Hebrews 4:14–16; 1 Timothy 2:5",
  },
  {
    title: "Eternal Security of the Believer",
    text: "All the redeemed, once saved, are kept by God's power and are thus secure in Christ forever. Eternal life is the present possession of every believer.",
    ref: "John 10:27–30; Romans 8:38–39",
  },
];
