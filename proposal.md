# Software Engineering for web applications

**Project Name:** Online Bank Account software

**Team No: 02**

**Team members:**
1. Khyati Dinesh Patel (kp935@scarletmail.rutgers.edu)
2. Vivek Kumar Agarwal (vka13@scarletmail.rutgers.edu)
3. Sahib Arora (sahib.arora@rutgers.edu)
4. Rohit Goyal (rg1025@scarletmail.rutgers.edu)

## Proposal

## Objective 
The objective here is to design a fully functional banking application which is customer-centric. This application will offer REST-based for integration with clients.

## Server side Data Collection
1. Customer Data - This is used to store customer's information. Each customer will have a unique identifier which can be used track particular transaction
   1. customer_uuid
   2. First name of customer
   3. Last name of customer
   4. Email
   5. Phone number
   6. Password
   
2. Account details - This is used to store the account details of the customer 
   1. account_uuid
   2. account number
   3. bank name
   4. routing number
   5. total balance
   6. customer_uuid
   
3. Transaction History - This is used to store the transaction details of the customer
   1. transaction_uuid
   2. transaction date
   3. withdraw amount
   4. deposit amount
   5. balance
   6. customer_uuid
   7. account_uuid
   
4. Live Transaction
   1. transaction type
   2. transaction status
   3. transaction timestamp
   4. transaction amount
   5. customer_uuid
   6. account_uuid
   
## List of operations
|Action | Supported data collection  | CRUD operation to be performed |
|----------------------|--------------|--------------------------|
|1. User Authentication | 1. Customer data| READ & WRITE|
|2. Save account details | 2.Account details| CREATE|
|3. Initiate transaction | 4. Live Transaction | CREATE|
|4. Transaction Conformation | 4. Live Transaction | UPDATE|
|5. List all transaction | 3. Transaction history| READ|
|6. Request Statement generation | 3. Transaction history | READ|

 
## Objective of the application 
|Objective number| Objective| Task | Scope of the task | Order of Execution| Module|  Data used|
|----------|-----------|---------|-----------|--------|-----------|-----------|
| 1.| 

 
## Data Operations
1. The application is a basic level banking system  that consists of user/ customer details and money transactions between various users. Dummy data will be created for a certain number of customers. Different database options that are likely to be used can be Mysql, Mongo, Postgres etc. Fields that wil b egenerated have been listed above in the server side collection. 
2. To start with, we will create the application with dummy data. We will create a login page for user authentication. that will enable for user creation. The data operations will include account management activities like money transfer between different users, balance statement enquiries, . 
3. The Techstack used will be -  for Frontend: Javascript, HTML, CSS; Database: MySQL and BACKEND: Javascript, PHP



## Use Case Diagram 
![Online_banking drawio](https://user-images.githubusercontent.com/86423179/155601866-a48ee95c-7d21-40ad-ad72-99d5d0d36453.svg)


## Business Rules and Policies
1. The customer will be required to maintain a minimum balance of $100 to maintain the account. 
2. All internal transfers/ money transactions are free of any charges. 
3. Money transactions with other banks will be levied with 1.5% handling charges.
4. a one time insufficient funds fee will be levied on overdrafts. The additional aount will be treated as a credit card loan and an interest rate of 12.5%.

