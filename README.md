# [Mindspace, Youtube] NodeJS / Express / MongoDB - Build a Shopping Cart [ENG, 2016]

Video:  
https://www.youtube.com/watch?v=-3vvxn78MH4&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp&index=2

Original SRC:  
https://github.com/mschwarzmueller/nodejs-shopping-cart-tutorial


<br/>
<br/>

I'm working on Ubuntu in docker container with debian jessie:

    $ lsb_release -a
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty


<br/>

    $ docker -v
    Docker version 1.9.1, build a34a1d5

<br/>


<a href="http://jsdev.org/env/docker/run-container/">How to run docker container for start development</a>
(If link will not work give me to know about it)

<br/>

    # node -v
    v6.8.1

    # npm -v
    3.10.8

<hr/>

<br/>

### 01 Intro & Setup

    # npm install -g nodemon
    # npm install -g express-generator
    $ su - developer
    $ cd /project/
    $ express . --hbs
    $ npm install
    $ nodemon

http://localhost:3000/


<br/>

### 02 Product Index View

    $ npm install --save express-handlebars


![Application](/img/video-02-pic-01.png?raw=true)


<br/>

### 03 MongoDB Mongoose Setup

    # apt-get install -y mongodb

<br/>

    # mkdir -p /data/db/
    # mongod

<br/>

    $ npm install --save mongoose


<br/>

### 04 Seeding Data

    $ node seed/product-seeder.js
    $ mongo

    use shopping
    db.products.find()


<br/>
<br/>

___

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

email:  
![Marley](http://img.fotografii.org/a3333333mail.gif "Marley")
