const mongoose = require('mongoose')
const { dbURI } = require('./config/environment')
const User = require('./models/User')
const Vinyl = require('./models/Vinyl')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      User.create({
        username: 'seangray1',
        email: 'sean.myles.gray@gmail.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
    })
    .then(() => {
      return Vinyl.create([{
        artist: 'Childish Gambino',
        title: 'Awaken, My Love',
        image: 'https://img.discogs.com/wAATX_t7ex9676wTKZudRnFzpi0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10288421-1495025633-4438.jpeg.jpg',
        releaseYear: 2017,
        genre: 'Funk',
        condition: 'Mint',
        length: '48:57',
        notes: '"Awaken, My Love!" is the third studio album by American rapper Donald Glover',
        label: 'Glassnote',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'GLS-0209-01',
        barcode: 810599021412
      },{
        artist: 'A Tribe Called Quest',
        title: 'The Low End Theory',
        image: 'https://img.discogs.com/Na_71Y9oc_wwixsjzafZhfDWQZA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-94800-1467721235-8229.jpeg.jpg',
        releaseYear: 1991,
        genre: 'Hip-Hop',
        condition: 'Mint',
        length: '48:03',
        notes: 'The Low End Theory is the second studio album by American hip hop group A Tribe Called Quest',
        label: 'Jive',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '1418-1-JDJ',
        barcode: 3562749401700
      },{
        artist: 'Slayer',
        title: 'Reign In Blood',
        image: 'https://img.discogs.com/PAvYnD9WYdKCdkDZW2-X6erkIkk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-377521-1262974365.jpeg.jpg',
        releaseYear: 1986,
        genre: 'Heavy Metal',
        condition: 'Mint',
        length: '25:58',
        notes: 'KILL KIILLL KIIIILLLLLLKIKIKIKKK KKKKKKKKKKK',
        label: 'Def Jam Recordings',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'GHS 24131',
        barcode: 6007535010540
      },{
        artist: 'Ornette Coleman',
        title: 'The Shape Of Jazz To Come',
        image: 'https://img.discogs.com/Px82OSzDFGt3wHlYP_Fpwqlgkx0=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-488973-1537684103-9468.jpeg.jpg',
        releaseYear: 1959,
        genre: 'Jazz',
        condition: 'Mint',
        length: '37:59',
        notes: 'The Shape of Jazz to Come is the third album by jazz musician Ornette Coleman.',
        label: 'Atlantic',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'ATL-5038',
        barcode: 7567813392
      },{
        artist: 'Chaka Khan',
        title: 'Hello Happiness',
        image: 'https://img.discogs.com/dHxCBaAyLanM4rA4rgze0riI0cQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13202042-1550059790-4542.jpeg.jpg',
        releaseYear: 2019,
        genre: 'Pop',
        condition: 'Mint',
        length: '27:10',
        notes: 'Hello Happiness is the twelfth studio album by American singer Chaka Khan, released on February 15, 2019. It is her first new material since 2007s Funk This. On limited coral coloured vinyl.',
        label: 'Island Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '7738531',
        barcode: 602577385315
      },{
        artist: 'Robyn',
        title: 'Honey',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61WaZwHl3iL._SL1200_.jpg',
        releaseYear: 2018,
        genre: 'Pop',
        condition: 'Mint',
        length: '40:23',
        notes: 'Honey is the eighth studio album by Swedish singer Robyn, and her first since Body Talk (2010). It was released on 26 October 2018 through Konichiwa and Island Records. It features the singles "Missing U", "Honey" and "Send to Robin Immediately".',
        label: 'Island Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'KOR057LP',
        barcode: 602567994688
      },{
        artist: 'Nancy Wilson/Cannonball Adderley',
        title: 'Nancy Wilson/Cannonball Adderley',
        image: 'https://img.discogs.com/btZmvTz5WSAG_MlJuwWGPymhIpU=/fit-in/469x471/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6519284-1421090801-1744.jpeg.jpg',
        releaseYear: 1961,
        genre: 'Jazz',
        condition: 'Fair',
        length: '41:34',
        notes: 'Nancy Wilson/Cannonball Adderley is a studio album by Nancy Wilson and Cannonball Adderley issued in February 1962 by Capitol Records.',
        label: 'Capitol Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'ST-1657',
        barcode: 123456789
      },{
        artist: 'St Vincent',
        title: 'St Vincent',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91mV8CQIoCL._SL1200_.jpg',
        releaseYear: 2014,
        genre: 'Alternative Rock',
        condition: 'Mint',
        length: '40:04',
        notes: 'St. Vincent is the eponymous fourth studio album by American musician St. Vincent. The album won a 2015 Grammy Award for Best Alternative Album, making St. Vincent only the second female solo artist to win the award since its inception in 1991.',
        label: 'Loma Vista',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'UNIW40355',
        barcode: 60253672509
      },{
        artist: 'Radiohead',
        title: 'In Rainbows',
        image: 'https://img.discogs.com/hldHd6xXfRrbYVgHDByRoNS8Pnw=/fit-in/600x586/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1187003-1495677239-2816.jpeg.jpg',
        releaseYear: 2007,
        genre: 'Alternative Rock',
        condition: 'Mint',
        length: '42:39',
        notes: 'n Rainbows is the seventh studio album by English rock band Radiohead. It was self-released on 10 October 2007 as a pay-what-you-want download, followed by a physical release internationally by XL Recordings in December 2007.',
        label: 'XL Recordings',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'XLLP 324',
        barcode: 880882162313
      },{
        artist: 'D\'Aneglo',
        title: 'Brown Sugar',
        image: 'https://img.discogs.com/qhZuVZb8wSWqKmvuJioQwzJsxTA=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3997782-1419865751-1816.jpeg.jpg',
        releaseYear: 1995,
        genre: 'RnB',
        condition: 'Mint',
        length: '53:17',
        notes: 'Brown Sugar is the debut studio album by American R&B singer, songwriter, and multi-instrumentalist D\'Angelo. It was released on July 3, 1995, by EMI Music.',
        label: 'EMI',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '4724081',
        barcode: 602547240811
      },{
        artist: 'Kendrick Lamar',
        title: 'Damn',
        image: 'https://img.discogs.com/7DbnFpfKBhaeQT1Mac1c4j-2xPI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10133538-1492204963-3196.jpeg.jpg',
        releaseYear: 2017,
        genre: 'Hip-Hop',
        condition: 'Mint',
        length: '54:54',
        notes: 'Damn (stylized as DAMN.) is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, by Aftermath Entertainment, Interscope Records and Top Dawg Entertainment.',
        label: 'Polydor',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '5761828',
        barcode: 602557618280
      },{
        artist: 'Glass Animals',
        title: 'How To Be A Human Being',
        image: 'https://img.discogs.com/X8PCjcUCHzy7OcpOtcWgtK8YjZ8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8959209-1472259764-3090.jpeg.jpg',
        releaseYear: 2016,
        genre: 'Alternative Rock',
        condition: 'Mint',
        length: '43:16',
        notes: 'How to Be a Human Being is the second studio album by English indie rock group Glass Animals.',
        label: 'Wolf Tone',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'WOLFTONE012LP',
        barcode: 602547950871
      },{
        artist: 'Kate Tempest',
        title: 'Let Them Eat Chaos',
        image: 'https://img.discogs.com/R9wIAj630uAbtGSzNjUvGLtOoBU=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9177038-1508366911-3218.jpeg.jpg',
        releaseYear: 2017,
        genre: 'Hip-Hop',
        condition: 'Mint',
        length: '47:43',
        notes: 'Let Them Eat Chaos is the second studio album by English poet and spoken word artist Kate Tempest, the follow up to her Mercury Prize-nominated debut Everybody Down.',
        label: 'Fiction Records',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'CHAOS23',
        barcode: 602557128277
      },{
        artist: 'Taylor Swift',
        title: '1989',
        image: 'https://img.discogs.com/dZ9Nb-FAwkBTYrmrL4yTeC2-8FY=/fit-in/600x530/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10163220-1522357384-7574.jpeg.jpg',
        releaseYear: 2014,
        genre: 'Pop',
        condition: 'Mint',
        length: '48:41',
        notes: '1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014 through Big Machine Records.',
        label: 'Virgin EMI',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'LC01846',
        barcode: 602547092687
      },{
        artist: 'Tame Impala',
        title: 'Currents',
        image: 'https://img.discogs.com/TH3722IESsHH9YyVXkLFhgTRDyA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7268943-1437635726-4759.jpeg.jpg',
        releaseYear: 2015,
        genre: 'Alternative Rock',
        condition: 'Mint',
        length: '51:06',
        notes: 'Currents is the third studio album by Australian artist Tame Impala. It was released on 17 July 2015 by Modular Recordings and Universal Music Australia, Interscope Records in the United States, and Fiction Records and Caroline International in other international regions.',
        label: 'Fiction Records',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '4730677',
        barcode: 602547306777
      },{
        artist: 'Sam Cooke',
        title: 'Portrait Of A Legend',
        image: 'https://img.discogs.com/VMbwXf4TVLroPShGxbKWy3PCue4=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-986910-1181048807.jpeg.jpg',
        releaseYear: 2003,
        genre: 'RnB',
        condition: 'Mint',
        length: '79:08',
        notes: 'Portrait of a Legend: 1951–1964 is a compilation album by American singer-songwriter Sam Cooke, released posthumously on June 17, 2003 by ABKCO Records. The disc covers Cooke\'s entire career, from his early 1950s beginnings with the Soul Stirrers to the posthumous 1964 single "Shake".',
        label: 'ABKCO Music & Records Ltd',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'LC22670',
        barcode: 18771926412
      },{
        artist: 'Count Basie and his orchestra',
        title: 'April in Paris',
        image: 'https://img.discogs.com/ujCySvZ8BymuPq5lIOeCMRixyVc=/fit-in/400x381/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5147760-1385796678-9080.jpeg.jpg',
        releaseYear: 2013,
        genre: 'Jazz',
        condition: 'Mint',
        length: '37.43',
        notes: 'Reissue of April in Paris, the classic album by pianist and bandleader Count Basie and His Orchestra, his first released on the Verve label, recorded in 1955 and 1956.',
        label: 'Verve',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '5345893',
        barcode: 600753458938
      },{
        artist: 'John Coltrane',
        title: 'Both Directions At Once: The Lost Album',
        image: 'https://img.discogs.com/fMOX-VMDd710gsPFdj7kRDlc0S0=/fit-in/600x531/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12191700-1534937036-8133.jpeg.jpg',
        releaseYear: 2018,
        genre: 'Jazz',
        condition: 'Mint',
        length: '77:63',
        notes: 'Both Directions at Once: The Lost Album is a studio album recorded by saxophonist John Coltrane for Impulse! Records that was first released in 2018. The recordings were made in 1963 during Coltrane\'s Classic Quartet period and lost for decades.',
        label: 'Impulse!',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '6749301',
        barcode: 602567493013
      },{
        artist: 'Chris Stapleton',
        title: 'Traveller',
        image: 'https://img.discogs.com/rdqOLwMgiZPF_p7GyX58f981rm8=/fit-in/600x541/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6987728-1524693525-7221.jpeg.jpg',
        releaseYear: 2015,
        genre: 'Country',
        condition: 'Mint',
        length: '63:04',
        notes: 'Traveller is the debut studio album by American singer-songwriter Chris Stapleton. The album was produced by Dave Cobb and Stapleton, and was released on May 5, 2015, through Mercury Nashville.',
        label: 'Mercury Nashville',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '4725522',
        barcode: 602547255228
      },{
        artist: 'Amy Winehouse',
        title: 'Back To Black',
        image: 'https://img.discogs.com/cPCB4YLC5A7PehUrvVZtPVyvVlY=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-825438-1194731140.jpeg.jpg',
        releaseYear: 2006,
        genre: 'Pop',
        condition: 'Mint',
        length: '34:56',
        notes: 'Back to Black is the second and final studio album by English singer and songwriter Amy Winehouse. It was released on 27 October 2006 by Island Records and features singles "Rehab", "You Know I\'m No Good", "Back to Black" and "Tears Dry on Their Own".',
        label: 'Island Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '1734128',
        barcode: 602517341289
      },{
        artist: 'Max Richter',
        title: 'Recomposed: Vivaldi - The Four Seasons',
        image: 'https://img.discogs.com/yorrrOY7MswBrxzqHcBvJO-PV-g=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6175289-1412950226-7930.jpeg.jpg',
        releaseYear: 2017,
        genre: 'Classical',
        condition: 'Near-Mint',
        length: '43:58',
        notes: 'Recomposed by Max Richter: Vivaldi – The Four Seasons is the 2012 album by neo-classical composer Max Richter, released on August 31, 2012 on Universal Classics and Jazz (Germany), a division of Universal Music Group, and Deutsche Grammophon.',
        label: 'Deutsche Grammophon',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '4793337',
        barcode: 28947933373
      },{
        artist: 'Bjork',
        title: 'Vulnicura',
        image: 'https://img.discogs.com/0MlEY37uYaLgRoOVBvewOTtzB0A=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7165846-1437824309-6017.jpeg.jpg',
        releaseYear: 2015,
        genre: 'Pop',
        condition: 'Mint',
        length: '58:36',
        notes: 'Vulnicura is the eighth studio album by Icelandic musician and singer Björk. It was produced by Björk, Arca and The Haxan Cloak, and released on 20 January 2015 by One Little Indian Records.',
        label: 'One Little Indian',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'LC 03275',
        barcode: 5016958998271
      },{
        artist: 'Nina Simone',
        title: 'I Put A Spell On You',
        image: 'https://img.discogs.com/5UzVkJ-sHfMRqUsw2BtkJQPX5l4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1337678-1472514305-4913.png.jpg',
        releaseYear: 2017,
        genre: 'Jazz',
        condition: 'Mint',
        length: '34:21',
        notes: 'Reissue of I Put a Spell on You, studio album by American jazz singer, songwriter, and pianist Nina Simone. Recorded in 1964 and 1965 in New York City, it was released by Philips Records in 1965.',
        label: 'Philips',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '5360570',
        barcode: 600753605707
      },{
        artist: 'Stevie Wonder',
        title: 'Innervisions',
        image: 'https://img.discogs.com/hKYhhcE5coVNKLjcNPi9QMTZti4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13286331-1551400916-4169.jpeg.jpg',
        releaseYear: 1973,
        genre: 'Funk',
        condition: 'Near-Mint',
        length: '44:12',
        notes: 'Innervisions is the 16th studio album by American musician Stevie Wonder, released August 3, 1973, on the Tamla label for Motown Records, a landmark recording of his "classic period".',
        label: 'Motown Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'LC00881',
        barcode: 50109032617
      },{
        artist: 'The Weeknd',
        title: 'Starboy',
        image: 'https://img.discogs.com/sgpeelvWqv7LI3cw9Cmpbi9cMKU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9804601-1487020408-6474.jpeg.jpg',
        releaseYear: 2017,
        genre: 'RnB',
        condition: 'Mint',
        length: '68:40',
        notes: 'Starboy is the third studio album by Canadian singer The Weeknd. It was released on November 25, 2016, by Republic Records and XO. The album features guest appearances from Daft Punk, Lana Del Rey, Kendrick Lamar and Future. Translucent red vinyl.',
        label: 'XO, Republic Records',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '5722751',
        barcode: 602557227512
      },{
        artist: 'David Brent & Foregone Conclusion',
        title: 'Lady Gypsy / Life On The Road',
        image: 'https://img.discogs.com/DnbsP2OWsu8tXzXOx700FqjpgoY=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8937502-1471831863-5552.jpeg.jpg',
        releaseYear: 2016,
        genre: 'Rock & Roll',
        condition: 'Near-Mint',
        length: '5:23',
        notes: 'Two lead singles from David Brent: Life on the Road, soundtrack to the 2016 British mockumentary comedy film written, directed, and produced by Ricky Gervais and released by Entertainment One.',
        label: 'Caroline International',
        size: '7"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '5702631',
        barcode: 602557026313
      },{
        artist: 'Keith Jarrett',
        title: 'The Koln Concert',
        image: 'https://img.discogs.com/pI5qzgC_H1MzkNWRgTNg5-L1z88=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7355051-1439652050-5628.jpeg.jpg',
        releaseYear: 1975,
        genre: 'Jazz',
        condition: 'Mint',
        length: '66:05',
        notes: 'The Köln Concert is a concert recording by the pianist Keith Jarrett of solo piano improvisations performed at the Opera House in Cologne (German: Köln) on January 24, 1975.The double-vinyl album was released in the autumn of 1975 by the ECM Records label to critical acclaim.',
        label: 'ECM',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '2727888',
        barcode: 602527278889
      },{
        artist: 'Dr Dre',
        title: '2001',
        image: 'https://img.discogs.com/M15MmeokEOy6kTMxuTq8YQ2Uswo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1544966-1374424889-6865.jpeg.jpg',
        releaseYear: 2007,
        genre: 'Hip-Hop',
        condition: 'Mint',
        length: '68:01',
        notes: '2001 is the second studio album by American rapper and producer Dr. Dre. It was released on November 16, 1999, by Interscope Records as the follow-up to his 1992 debut album The Chronic.',
        label: 'Interscope Records',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'LC06406',
        barcode: 606949048617
      },{
        artist: 'Kendrick Lamar',
        title: 'To Pimp A Butterfly',
        image: 'https://img.discogs.com/MvHfzgtY5dfArWFsfBRGYN-V4Zs=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7531525-1443405880-7161.jpeg.jpg',
        releaseYear: 2015,
        genre: 'Hip-Hop',
        condition: 'Mint',
        length: '78:51',
        notes: 'To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on March 15, 2015, by Aftermath Entertainment, Interscope Records and Top Dawg Entertainment.',
        label: 'Interscope Records',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '4731100',
        barcode: 602547311009
      },{
        artist: 'Nick Drake',
        title: 'Five Leaves Left',
        image: 'https://img.discogs.com/G9j93v3C7-DcnahBnOS-Vhv-5eY=/fit-in/394x394/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-467112-1258034866.jpeg.jpg',
        releaseYear: 2015,
        genre: 'Folk',
        condition: 'Mint',
        length: '41:43',
        notes: 'Five Leaves Left is the debut studio album by English folk musician Nick Drake. Recorded between 1968 and 1969, it was released in 1969 by record label Island.',
        label: 'Island Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '3734756',
        barcode: 602537347568
      },{
        artist: 'Bill Evans',
        title: 'Conversations With Myself',
        image: 'https://img.discogs.com/FCPSEKz7VV0dDUnOYB81d3KdpFw=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8763842-1468269058-2026.jpeg.jpg',
        releaseYear: 2013,
        genre: 'Jazz',
        condition: 'Mint',
        length: '36:43',
        notes: 'Conversations with Myself is a 1963 album by American jazz musician Bill Evans.',
        label: 'Verve',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '5345891',
        barcode: 600753458914
      },{
        artist: 'Frank Sinatra',
        title: 'Come Fly With Me',
        image: 'https://img.discogs.com/H5sFqa36ZdH1SePcHjxeN61aK7c=/fit-in/600x607/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6437452-1419199613-8243.jpeg.jpg',
        releaseYear: 2014,
        genre: 'Jazz',
        condition: 'Mint',
        length: '46:08',
        notes: 'Come Fly with Me is an album by American singer Frank Sinatra, released in 1958. Reissue.',
        label: 'Capitol Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '3776149',
        barcode: 602537761494
      },{
        artist: 'Donna Summer',
        title: 'Love To Love You Donna',
        image: 'https://img.discogs.com/Bkhvhw4cEDvl92cjPpYHiC02iF8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7477907-1442278960-7248.jpeg.jpg',
        releaseYear: 2013,
        genre: 'Electro',
        condition: 'Mint',
        length: '35:48',
        notes: 'Love to Love You Baby is the second studio album by American singer Donna Summer, released on August 27, 1975 and her first to be released internationally and in the United States.',
        label: 'Verve',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '3776149',
        barcode: 602537761494
      },{
        artist: 'Thelonious Monk',
        title: 'Brilliant Corners',
        image: 'https://img.discogs.com/i-arusRdGu8_k_oRBpTO1u2gBUU=/fit-in/600x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2537618-1289403053.jpeg.jpg',
        releaseYear: 1982,
        genre: 'Jazz',
        condition: 'Mint',
        length: '42:47',
        notes: 'Brilliant Corners is a studio album by American jazz musician Thelonious Monk. It was his third album for Riverside Records,[1] and the first, for this label, to include his own compositions. The complex title track required over a dozen takes in the studio.',
        label: 'Riverside Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'OJC-026',
        barcode: 25218602617
      },{
        artist: 'Bon Iver',
        title: 'Bon Iver',
        image: 'https://img.discogs.com/IIcJq-QJZcaHUn0HFHDmMvB2i-w=/fit-in/400x400/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2940876-1308320926.jpeg.jpg',
        releaseYear: 2011,
        genre: 'Alternative Rock',
        condition: 'Near-Mint',
        length: '39:25',
        notes: 'Bon Iver, also referred to as Bon Iver, Bon Iver, is the second studio album from American indie folk band Bon Iver, released on June 17, 2011. The album is composed of 10 songs and was seen as a new musical direction for the band.',
        label: '4AD',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'CAD3117',
        barcode: 652637311716
      },{
        artist: 'James Blake',
        title: 'James Blake',
        image: 'https://img.discogs.com/elkavcQ9Ym5PPM-WVF93sdcWetU=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2692196-1329659703.jpeg.jpg',
        releaseYear: 2011,
        genre: 'Electro',
        condition: 'Near-Mint',
        length: '38:00',
        notes: 'James Blake is the debut studio album by London-based electronic music producer James Blake. It was released in both the United Kingdom and the United States on 4 February 2011. The release was supported with the release of its first single, "Limit to Your Love", on 28 November 2010."',
        label: 'Polydor',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'ATLAS02LP',
        barcode: 602527554723
      },{
        artist: 'Charlie Parker',
        title: 'Charlie Parker With Strings',
        image: 'https://img.discogs.com/CmI5hTlAKweqCKZhHsFOpEnPoaE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6255700-1414908744-7544.jpeg.jpg',
        releaseYear: 1955,
        genre: 'Jazz',
        condition: 'Near-Mint',
        length: '36:34',
        notes: 'Charlie Parker with Strings is the name of two separate albums by jazz musician Charlie Parker, released in 1950 on Mercury Records.',
        label: 'Verve',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'MG C-675',
        barcode: 600753458884
      },{
        artist: 'Erykah Badu',
        title: 'Baduizm',
        image: 'https://img.discogs.com/KLOELN7lWCINJ2t3dj-moyM3DX8=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1016593-1488850605-8954.jpeg.jpg',
        releaseYear: 1997,
        genre: 'RnB',
        condition: 'Near-Mint',
        length: '58:15',
        notes: 'Baduizm is the debut album by American singer and songwriter Erykah Badu, released on February 11, 1997 by Kedar Records.',
        label: 'Universal Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'LC 01056',
        barcode: 601215302714
      },{
        artist: 'Marvin Gaye',
        title: 'Let\'s Get It On',
        image: 'https://img.discogs.com/qrQ0gptyAUixLYNHlst3sAN_aZU=/fit-in/600x606/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-305438-1550584469-8419.jpeg.jpg',
        releaseYear: 2008,
        genre: 'Funk',
        condition: 'Mint',
        length: '31:36',
        notes: 'Reissue. Let\'s Get It On is the thirteenth studio album by American singer, songwriter, and producer Marvin Gaye. It was released on August 28, 1973, by the Motown Records subsidiary label Tamla.',
        label: 'Motown Records',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '5353425',
        barcode: 600753534250
      },{
        artist: 'Iggy Pop',
        title: 'Post Pop Depression',
        image: 'https://img.discogs.com/39EclklGBMIUWgzvx4jU-J7odIM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8260068-1458148329-1057.jpeg.jpg',
        releaseYear: 2016,
        genre: 'Rock & Roll',
        condition: 'Mint',
        length: '42:13',
        notes: 'Post Pop Depression is the seventeenth studio album by American rock singer Iggy Pop, released by Loma Vista Recordings on March 18 2016. Produced by Josh Homme of Queens of the Stone Age, the album also features QOSA member Dean Fertita and Arctic Monkeys drummer Matt Helders.',
        label: 'Loma Vista',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'CAROLO11LP',
        barcode: 602547778215
      },{
        artist: 'John Coltrane',
        title: 'Blue Train',
        image: 'https://img.discogs.com/GsajIOi7zBZqfCl11Kc9DhuGghU=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1834760-1495735112-8389.jpeg.jpg',
        releaseYear: 2013,
        genre: 'Jazz',
        condition: 'Mint',
        length: '42:50',
        notes: 'Reissue. Blue Train is a studio album by John Coltrane, released in 1958 on Blue Note Records, catalogue BLP 1577.',
        label: 'Blue Note',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '3771410',
        barcode: 602537714100
      },{
        artist: 'Cannonball Adderley',
        title: 'Somethin\' Else',
        image: 'https://img.discogs.com/AQTUFHncmiF9QJRXCt3stdkjtAs=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6243620-1414602360-4006.jpeg.jpg',
        releaseYear: 2012,
        genre: 'Jazz',
        condition: 'Mint',
        length: '43:41',
        notes: 'Reissue. Somethin\' Else is a jazz album by saxophonist Julian "Cannonball" Adderley, released on Blue Note Records in 1958. Also on the session is trumpeter Miles Davis in one of his handful of recording dates for Blue Note. Adderley was a member of Davis\' group at the time this album was recorded.',
        label: 'Blue Note',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '377307',
        barcode: 60253773070
      }])
    })
})
