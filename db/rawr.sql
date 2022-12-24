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
    'http://some_image.png'
), (
    'b',
    'B',
    'http://some_image.png'
), (
    'c',
    'C',
    'http://some_image.png'
), (
    'd',
    'D',
    'http://some_image.png'
), (
    'e',
    'E',
    'http://some_image.png'
), (
    'f',
    'F',
    'http://some_image.png'
), (
    'g',
    'G',
    'http://some_image.png'
), (
    'h',
    'H',
    'http://some_image.png'
), (
    'i',
    'I',
    'http://some_image.png'
), (
    'j',
    'J',
    'http://some_image.png'
), (
    'k',
    'K',
    'http://some_image.png'
), (
    'l',
    'L',
    'http://some_image.png'
), (
    'm',
    'M',
    'http://some_image.png'
), (
    'n',
    'N',
    'http://some_image.png'
), (
    'o',
    'O',
    'http://some_image.png'
), (
    'p',
    'P',
    'http://some_image.png'
), (
    'q',
    'Q',
    'http://some_image.png'
), (
    'r',
    'R',
    'http://some_image.png'
), (
    's',
    'S',
    'http://some_image.png'
), (
    't',
    'T',
    'http://some_image.png'
), (
    'u',
    'U',
    'http://some_image.png'
), (
    'v',
    'V',
    'http://some_image.png'
), (
    'w',
    'W',
    'http://some_image.png'
), (
    'x',
    'X',
    'http://some_image.png'
), (
    'y',
    'Y',
    'http://some_image.png'
), (
    'z',
    'Z',
    'http://some_image.png'
);

insert into colors (
    "name",
    "img"
) values (
    'red',
    'http://some_image.png'
), (
    'yellow',
    'http://some_image.png'
), (
    'blue',
    'http://some_image.png'
), (
    'purple',
    'http://some_image.png'
), (
    'green',
    'http://some_image.png'
), (
    'orange',
    'http://some_image.png'
);
