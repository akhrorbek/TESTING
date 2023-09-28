CREATE DATABASE exam151222;

DROP TABLE IF EXISTS companies;

CREATE TABLE companies(
    comp_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    comp_name text not null,
    comp_photo_link varchar(255) not null
);

DROP TABLE IF EXISTS complexes;

CREATE TABLE complexes(
    compx_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    compx_name text not null,
    compx_photo varchar(255) not null,
    comp_name text not null,
    comp_id uuid,
        Foreign key(comp_id)
        References companies(comp_id)
        On delete cascade
);



DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms(
    room_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    room_number int not null,
    room_size int not null,
    room_cost text not null,
    room_photo text,
    compx_name text not null,
    compx_id uuid,
        Foreign key(compx_id)
        References complexes(compx_id)
        On delete cascade
);


DROP TABLE IF EXISTS banks;

CREATE TABLE banks(
    bank_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    bank_name varchar(60) not null,
    bank_loan text not null,
    bank_loan_year int not null,
    bank_loan_percent int not null,
    bank_photo text
);

DROP TABLE IF EXISTS admin;

CREATE TABLE admin(
    admin_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    admin_username text not null,
    admin_password int not null
);

INSERT INTO admin(admin_username, admin_password) VALUES('akhror_bek', 12345678);