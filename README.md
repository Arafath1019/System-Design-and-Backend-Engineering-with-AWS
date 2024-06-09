# System-Design-and-Backend-Engineering-with-AWS---Poridhi

## Helping resource
1. https://excalidraw.com/

## Course Information
- Course Link: https://poridhi.io/course-details/7f406007-fb7a

## System Design Resources
- Grokking the System Design Book

## Problem Solving Resources
- Neetcode Roadmap: https://neetcode.io/roadmap
- Take U Forward: https://www.youtube.com/@takeUforward
- Take U Forward Website: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/
- Blind 75 Leetcode Questions: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions

## System Design & Backend Development Course Overview
- System Design & Development End-to-end process: System Build -> System Deploy (AWS) -> System Monitoring
- Course Overview: Basic -> Math -> NodeJS API Development -> Rate Limit Module -> Load Balancer -> Docker -> Microservices -> Kubernetes -> Redis, RabbitMQ

## All modules google drive link
1. All modules: https://drive.google.com/drive/folders/1e7fyBRqZvwZMPBiX7ykhw2NF74Jaym2R

## MODULE ONE: SYSTEM DESIGN BASICS
### Class ONE
<img src="images/module-one/networking-1.jpeg" alt="Networking 1" height="600" width="100%">
<img src="images/module-one/networking-2.jpeg" alt="Networking 2" height="600" width="100%">
<img src="images/module-one/networking-3.jpeg" alt="Networking 3" height="600" width="100%">
<img src="images/module-one/networking-4.jpeg" alt="Networking 4" height="600" width="100%">
<img src="images/module-one/networking-5.jpeg" alt="Networking 5" height="600" width="100%">
<img src="images/module-one/networking-6.jpeg" alt="Networking 6" height="600" width="100%">
<img src="images/module-one/networking-7.jpeg" alt="Networking 7" height="600" width="100%">

## Networking resources
1. Practical Networking:https://www.practicalnetworking.net/index/networking-fundamentals-how-data-moves-through-the-internet/
2. Networking and Kubernetes: A Layered Approach Book: https://dokumen.pub/networking-and-kubernetes-a-layered-approach-1nbsped-1492081655-9781492081654.html

### Class TWO
<img src="images/module-one/networking-8.jpeg" alt="Networking 7" height="600" width="100%">
<img src="images/module-one/networking-9.jpeg" alt="Networking 7" height="600" width="100%">
<img src="images/module-one/networking-10.jpeg" alt="Networking 7" height="600" width="100%">
<img src="images/module-one/networking-11.jpeg" alt="Networking 7" height="600" width="100%">
<img src="images/module-one/networking-12.jpeg" alt="Networking 7" height="600" width="100%">
<img src="images/module-one/networking-13.jpeg" alt="Networking 7" height="600" width="100%">
<img src="images/module-one/networking-14.jpeg" alt="Networking 7" height="600" width="100%">

### Class THREE
<img src="images/module-one/networking-15.jpeg" alt="Networking 15" height="600" width="100%">
<img src="images/module-one/networking-16.jpeg" alt="Networking 16" height="600" width="100%">
<img src="images/module-one/networking-17.jpeg" alt="Networking 17" height="600" width="100%">

### Class FOUR
<img src="images/module-one/networking-18.jpeg" alt="Networking 15" height="600" width="100%">
<img src="images/module-one/networking-19.jpeg" alt="Networking 16" height="600" width="100%">
<img src="images/module-one/networking-20.jpeg" alt="Networking 17" height="600" width="100%">
<img src="images/module-one/networking-21.jpeg" alt="Networking 17" height="600" width="100%">
<img src="images/module-one/networking-22.jpeg" alt="Networking 17" height="600" width="100%">

## MODULE TWO: MATHEMATICS FOR SYSTEM DESIGN


## MODULE THREE: NODEJS API DEVELOPMENT
### Section: NODEJS
#### What is NodeJS
<img src="images/module-three/1.jpeg" alt="Networking 17" height="600" width="100%">

### Section: NODEJS ESSENTIALS
#### How to do it in Backend
<img src="images/module-three/2.jpeg" alt="Networking 17" height="600" width="100%">
<img src="images/module-three/3.jpeg" alt="Networking 17" height="600" width="100%">

#### How to do it in Backend - Get Request in Details
<img src="images/module-three/4.jpeg" alt="Networking 17" height="600" width="100%">
<img src="images/module-three/5.jpeg" alt="Networking 17" height="600" width="100%">
<img src="images/module-three/6.jpeg" alt="Networking 17" height="600" width="100%">

#### How to do it in Backend- Post API Request
<img src="images/module-three/7.jpeg" alt="Networking 17" height="600" width="100%">
<img src="images/module-three/8.jpeg" alt="Networking 17" height="600" width="100%">

#### DATA FLOW
<img src="images/module-three/9.jpeg" alt="Networking 17" height="600" width="100%">

#### Installing Postgres Pgadmin
1. Download and install PostgreSQL: https://www.postgresql.org/download/
2. Download and install PgAdmin4: https://www.pgadmin.org/download/

#### Make a GET request and understand the flow
1. Create a Database named "student"
2. Create a table named "person" with id, name, age, result fields
```
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INTEGER,
    result VARCHAR(50)
);
```
3. Insert Data into person table
```
INSERT INTO person (name, age, result) VALUES 
    ('John', 25, 'Pass'),
    ('Alice', 30, 'Fail'), 
    ('Bob', 28, 'Pass');
```
4. Process flow
<img src="images/module-three/10.jpeg" alt="Networking 17" height="150" width="100%">

#### Routing in Node JS Application
1. Layered Architecture of Node JS
<img src="images/module-three/11.jpeg" alt="Networking 17" height="300" width="100%">
2. Layered Architecture Flow
<img src="images/module-three/12.jpeg" alt="Networking 17" height="300" width="100%">