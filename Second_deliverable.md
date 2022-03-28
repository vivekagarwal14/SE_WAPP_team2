# Project Backend Definition

The report contains two parts: -

### Database Schema

The entity relationship diagram as shown below explain the online banking system application designed by the group. The diagram lays out various entities like User, Account, Transaction. Another entity Employee has also been created in the diagram for understanding purposes. However, our application will not include any employee/ staff database.

![ER_diagram_banking_software drawio](https://user-images.githubusercontent.com/86423179/160428576-1156befe-535b-4b20-a2f2-f3b73a4dd693.svg)

### Database
For the database we decided to use PostgresSQL, since it ACID compliant. which is important when capturing any bank transactions.We started with creating a database using CREATE DATABASE command, once the database was created, we used CREATE TABLE command to create tables for bank_user, TOKENS, account and transactions. For the bank_user, we are storing the user's first name, last name, email address, password and we are assigning user_id to each user, this acts as an identifier for that user. Email address and password is used in the login page in order to authenticate the user. In the token’s table, we are assigning a unique token to each user who is doing some transaction. For the account table we are capturing the user's account number, bank name, Routing number total balance, along with things we are mapping user_id and account_id to each account number. Lastly, for the transaction table we are capturing the user's transaction date, which is saved in timestamp, withdrawal amount, deposit amount, balance, and here we are mapping each transaction using account_id and transaction_id. Thus, using these ids make sure that each value is mapped properly to the respective entity and the transaction is captured properly.

### SQL Queries
CREATE DATABASE bank_account;

CREATE TABLE bank_user(

userid BIGSERIAL PRIMARY KEY NOT NULL,

  first_name VARCHAR(32) NOT NULL,

  last_name VARCHAR(32) NOT NULL,

  email VARCHAR(32) NOT NULL,

  password VARCHAR(255) NOT NULL,

  unique(email)
);

CREATE TABLE TOKENS(

id BIGSERIAL PRIMARY KEY NOT NULL,

access_token VARCHAR(500) NOT NULL, 

userid BIGSERIAL NOT NULL,

FOREIGN KEY(userid) REFERENCES bank_user(userid)
);

CREATE TABLE account(
    
account_id BIGSERIAL PRIMARY KEY NOT NULL,

account_no BIGINT NOT NULL,
    
bank_name VARCHAR(50) NOT NULL,
    
Routing_number VARCHAR(32) NOT NULL,
    
userid INTEGER NOT NULL,
    
total_balance BIGINT NOT NULL DEFAULT 0,
    
FOREIGN KEY(userid) REFERENCES bank_user(userid)
);

CREATE TABLE transactions(

tr_id BIGSERIAL PRIMARY KEY NOT NULL,
    
transaction_date TIMESTAMP NOT NULL,
    
withdraw_amount DECIMAL NULL,
    
deposit_amount DECIMAL NULL,
    
balance DECIMAL NOT NULL DEFAULT 0,
    
account_id BIGINT NOT NULL,
    
FOREIGN KEY(account_id) REFERENCES account(account_id)
);




### API Specification Table

![API Table](https://user-images.githubusercontent.com/86423179/160429550-6e11f841-50b1-47f2-b68a-25b4db35e330.png)


Need to expand on All Details - generic term - By Sahib and Rohit




##### Explaination

By Sahib and Rohit
