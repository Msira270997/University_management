USE university;

create table especiality (
	id int not null auto_increment,
    name varchar (30) not null,
    primary key (id)
);

create table academic_period (
	id int not null auto_increment,
    period varchar (7) not null,
    primary key (id)
);

create table classroom (
	id int not null auto_increment,
    classroom varchar (10) not null,
    primary key (id)
);

create table teacher (
	id int not null auto_increment,
    name varchar not null,
    lastname VARCHAR not null,
    email varchar not null unique,
    primary key (id)
);

create table subjects (
	id int not null auto_increment,
    name varchar not null,
    semester int not null,
    credits int not null,
    primary key (id)
);

create table studens (
	id int not null auto_increment,
    name varchar not null,
    lastname varchar not null,
    email varchar not null unique,
    create_at datetime not null,
    especiality_id int not null,
    primary key (id)
);

create table accounts (
	id int not null auto_increment,
    username varchar not null,
    password varchar not null,
    email varchar not null unique,
    role varchar not null,
    primary key (id)
);

create table inscription (
	id int not null auto_increment,
    date datetime not null,
    student_id int not null,
    academic_period_id int not null,
    primary key (id)
);

create table subject_teacher (
	id int not null auto_increment,
    teacher_id int not null,
    subject_id int not null,
    primary key (id)
);

create table registration_detail (
    id int not null auto_increment,
    section int not null,
    schedule time not null,
    inscription_id int not null,
    subject_teacher_id int not null,
    classroom_id int not null,
    primary key (id)
);

CREATE INDEX especiality_index ON studens(especiality_id);

CREATE INDEX student_index ON inscription(student_id);

CREATE INDEX academic_period_index ON inscription(academic_period_id);

CREATE INDEX teacher_index ON subject_teacher(teacher_id);

CREATE INDEX subject_index ON subject_teacher(subject_id);

CREATE INDEX inscription_index ON registration_detail(inscription_id);

CREATE INDEX subject_teacher_index ON registration_detail(subject_teacher_id);

CREATE INDEX classroom_index ON registration_detail(classroom_id);
