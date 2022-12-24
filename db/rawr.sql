create table numbers (
    id serial primary key,
    number integer,
    tally_img varchar(200)
);

create table letters (
    letter_lowercase char(1) primary key,
    letter_uppercase char(1),
    association_img varchar(200)
);

create table colors (
    id serial primary key,
    name varchar(50),
    img varchar(200)
);

insert into numbers (
    "number",
    "tally_img"
) values (
    '0',
    'http://some_image.png'
), (
    '1',
    'http://some_image.png'
), (
    '2',
    'http://some_image.png'
), (
    '3',
    'http://some_image.png'
), (
    '4',
    'http://some_image.png'
), (
    '5',
    'http://some_image.png'
), (
    '6',
    'http://some_image.png'
), (
    '7',
    'http://some_image.png'
), (
    '8',
    'http://some_image.png'
), (
    '9',
    'http://some_image.png'
);

insert into letters (
    "letter_lowercase",
    "letter_uppercase",
    "association_img"
) values (
    'a',
    'A',
    'ant.png'
), (
    'b',
    'B',
    'blue.jpg'
), (
    'c',
    'C',
    'cat.jpg'
), (
    'd',
    'D',
    'dancing.png'
), (
    'e',
    'E',
    'eating.jpg'
), (
    'f',
    'F',
    'food.jpg'
), (
    'g',
    'G',
    'girl.jpg'
), (
    'h',
    'H',
    'hat.jpg'
), (
    'i',
    'I',
    'igloo.jpg'
), (
    'j',
    'J',
    'jack-o-lantern.jpg'
), (
    'k',
    'K',
    'kite.jpg'
), (
    'l',
    'L',
    'llama.jpg'
), (
    'm',
    'M',
    'miren.jpg'
), (
    'n',
    'N',
    'nose.jpg'
), (
    'o',
    'O',
    'owl.jpg'
), (
    'p',
    'P',
    'panda.jpg'
), (
    'q',
    'Q',
    'queen.jpg'
), (
    'r',
    'R',
    'rabbit.jpg'
), (
    's',
    'S',
    'squirrel.jpg'
), (
    't',
    'T',
    'tiger.png'
), (
    'u',
    'U',
    'umbrella.jpg'
), (
    'v',
    'V',
    'volcano.jpg'
), (
    'w',
    'W',
    'whale.png'
), (
    'x',
    'X',
    'fox.jpg'
), (
    'y',
    'Y',
    'yoyo.png'
), (
    'z',
    'Z',
    'zebra.png'
);

insert into colors (
    "name",
    "img"
) values (
    'red',
    'red.jpg'
), (
    'yellow',
    'yellow.jpg'
), (
    'blue',
    'blue.jpg'
), (
    'purple',
    'purple.png'
), (
    'green',
    'green.jpg'
), (
    'orange',
    'orange.jpg'
);
