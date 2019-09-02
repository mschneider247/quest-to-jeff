const currentCatagories = [{
  question: 'A 1992 law introduced by Sen. Cranston aimed to reduce the use of paint containing too much of this element',
  answer: 'lead',
  pointValue: 100,
  categoryId: 3
}, {
  question: 'An effort lasting from 1985 to 1991 eliminated this paralytic illness from Latin America',
  answer: 'polio',
  pointValue: 200,
  categoryId: 3
}, {
  question: '(<a href="http://www.j-archive.com/media/2005-12-21_J_25.jpg" target="_blank">Hi!  I\'m CNN senior medical correspondent Dr. Sanjay Gupta.</a>)  I joined CNN in 2001 & reported on the biological attacks of this bacillus in the news that October',
  answer: 'anthrax',
  pointValue: 300,
  categoryId: 3
}, {
  question: 'Stanford\'s med school has a division of this, the study & control of disease in populations',
  answer: 'epidemiology',
  pointValue: 400,
  categoryId: 3
}, {
  question: 'Also a type of mathematical quantity, it\'s a term for disease-carrying critters like ticks',
  answer: 'a vector',
  pointValue: 400,
  categoryId: 3
}, {
  question: 'Title of Sylvia Nasar\'s tale of "The Life of Mathematical Genius and Nobel Laureate John Nash',
  pointValue: 100,
  answer: 'A Beautiful Mind',
  categoryId: 7
}, {
  question: 'This pioneer was a man, yes, a big man, & his bio won a Newbery Medal for James Daugherty',
  pointValue: 200,
  answer: 'Daniel Boone',
  categoryId: 7
}, {
  question: 'Virginia Spencer Carr\'s "The Lonely Hunter" chronicles the life of this author',
  pointValue: 300,
  answer: 'Carson McCullers',
  categoryId: 7
}, {
  question: 'This "Lady"like biographer of Mary, Queen of Scots came out with "Marie Antoinette: The Journey" in 2001',
  pointValue: 400,
  answer: 'Antonia Fraser',
  categoryId: 7
}, {
  question: 'While out of office in the 1930s, he knocked out a million-word biography of his ancestor the Duke of Marlborough',
  pointValue: 400,
  answer: 'Churchill',
  categoryId: 7
}, {
  question: 'Ex-Boston Globe scribe Leigh Montville is the latest biographer of this baseball great',
  pointValue: 100,
  answer: 'Ted Williams',
  categoryId: 7
}, {
  question: 'A bio of him sums up, "It was by dying when he did", in 1863 that he achieved his military fame',
  pointValue: 200,
  answer: 'Stonewall Jackson',
  categoryId: 7
}, {
  question: 'Uncertainty: The Life and Science of" this man explores his work on Nazi weapons programs',
  pointValue: 300,
  answer: '(Werner) Heisenberg',
  categoryId: 7
}, {
  question: 'A biography of this wife of James Joyce is subtitled "The Real Life of Molly Bloom',
  pointValue: 400,
  answer: 'Nora Joyce',
  categoryId: 7
}, {
  question: 'This late-night talk show host titled his memoir "Leading With My Chin',
  pointValue: 400,
  answer: 'Jay Leno',
  categoryId: 7
}, {
  question: 'From the 1980s, "Cory: Profile of a President" was about her',
  pointValue: 100,
  answer: 'Corazon Aquino',
  categoryId: 7
}, {
  question: 'A 1928 biography on this religious figure was titled "Gotama The Man',
  pointValue: 200,
  answer: 'Buddha',
  categoryId: 7
}, {
  question: 'In 1978 Bob Thomas wrote "Joan Crawford: A Biography" & Christina Crawford wrote this',
  pointValue: 300,
  answer: 'Mommie Dearest',
  categoryId: 7
}, {
  question: 'Robert Shelton\'s "No Direction Home" covered the life of this rock music performer',
  pointValue: 400,
  answer: 'Bob Dylan',
  categoryId: 7
}, {
  question: 'An energetic person is full of these, maybe the fava type',
  pointValue: 100,
  answer: 'beans',
  categoryId: 9
}, {
  question: 'Government money that a congressman steers toward his home district',
  pointValue: 200,
  answer: 'pork',
  categoryId: 9
}, {
  question: 'To mean a quarrel, vegetarians can use "rhubarb" & carnivores can use this',
  pointValue: 300,
  answer: 'beef',
  categoryId: 9
}, {
  question: 'Diana Prince occasionally has to take her hair out of this to become Wonder Woman',
  pointValue: 400,
  answer: 'a bun',
  categoryId: 9
}, {
  question: 'A story or joke that\'s been repeated often, maybe too often',
  pointValue: 400,
  answer: 'a chestnut',
  categoryId: 9
}, {
  question: 'In India, ghee, which is a clarified form of this, is widely used in cooking',
  pointValue: 100,
  answer: 'Butter',
  categoryId: 9
}, {
  question: 'Be quiet little dog, & I\'ll feed you these deep fried concoctions made of corn meal',
  pointValue: 200,
  answer: 'Hush Puppies',
  categoryId: 9
}, {
  question: 'Flavor of the jelly or sauce that\'s a common accompaniment to roast lamb',
  pointValue: 300,
  answer: 'Mint',
  categoryId: 9
}, {
  question: 'Color of the beans you\'d find in a feijoada, the national dish of Brazil',
  pointValue: 400,
  answer: 'Black',
  categoryId: 9
}, {
  question: 'Broccoflower, a relatively new vegetable, is a cross between broccoli & this',
  pointValue: 400,
  answer: 'cauliflower',
  categoryId: 9
}, {
  question: 'Beurre blanc is a classic French sauce whose name means this color butter',
  pointValue: 100,
  answer: 'white',
  categoryId: 9
}, {
  question: 'The last name of a nursery rhyme Jack, or a fish that\'s so high in fat he couldn\'t eat it',
  pointValue: 200,
  answer: 'Sprat',
  categoryId: 9
}, {
  question: 'One of Post\'s Pebbles Cereals is named for this pet who lives in Bedrock',
  pointValue: 300,
  answer: 'Dino',
  categoryId: 9
}, {
  question: 'Popular in Pennsylvania, pepper pot is a peppery soup made from this stomach lining',
  pointValue: 400,
  answer: 'tripe',
  categoryId: 9
}, {
  question: 'In a cling peach the flesh clings to this',
  pointValue: 400,
  answer: 'the pit',
  categoryId: 9
}, {
  question: 'Scorecard Report" & "Peter Jacobsen Plugged In" are seen on the sports channel devoted to this',
  pointValue: 100,
  answer: 'golf',
  categoryId: 10
}, {
  question: 'One of the most popular shows on the Food Network is "The Essence of" him',
  pointValue: 200,
  answer: 'Emeril',
  categoryId: 10
}, {
  question: 'The Eulogy" is HBO\'s e-mail newsletter devoted to this series',
  pointValue: 300,
  answer: 'Six Feet Under',
  categoryId: 10
}, {
  question: '(Hi, I\'m Billy Ray Cyrus.)  In 2001 I began practicing medicine in the Big Apple on this Pax TV drama',
  pointValue: 400,
  answer: 'Doc',
  categoryId: 10
}, {
  question: 'What Sonya Fitzpatrick is, or the Animal Planet series on which she communicates with animals telepathically',
  pointValue: 400,
  answer: 'The Pet Psychic',
  categoryId: 10
}, {
  question: 'If you want your MTV, you should know that MTV stands for this',
  pointValue: 100,
  answer: 'Music Television',
  categoryId: 10
}, {
  question: 'All your relatives might enjoy this channel abbreviated FAM',
  pointValue: 200,
  answer: 'The Family Channel (The Family Network accepted)',
  categoryId: 10
}, {
  question: 'This acronym for American Christian Television System is a book of the Bible, too',
  pointValue: 300,
  answer: 'ACTS',
  categoryId: 10
}, {
  question: 'In TV land, TNT doesn\'t stand for trinitrotoluene but for this',
  pointValue: 400,
  answer: 'Turner Network Television',
  categoryId: 10
}, {
  question: 'The Cable Satellite Public Affairs Network is known by this acronym',
  pointValue: 400,
  answer: 'C-SPAN',
  categoryId: 10
}, {
  question: 'What MTV plays 24 hours a day',
  pointValue: 100,
  answer: 'music videos',
  categoryId: 10
}, {
  question: 'Cable channel where you\'d find "Mouseterpiece Theatre',
  pointValue: 200,
  answer: 'the Disney Channel',
  categoryId: 10
}, {
  question: 'Comedy group which went from CBC to NBC to Cinemax',
  pointValue: 300,
  answer: 'SCTV',
  categoryId: 10
}, {
  question: 'His flagship station is WTBA, Atlanta',
  pointValue: 400,
  answer: 'Ted Turner',
  categoryId: 10
}, {
  question: 'Actress who started the "Faerie Tale Theatre',
  pointValue: 400,
  answer: 'Shelley Duvall',
  categoryId: 10
}]

export default currentCatagories