# Project Name

## Table of Content
- [Project Description](#project-description)
- [Repo Description](#repo-description)
- [Technologies Used](#technologies-used)
- [Concepts Used](#concepts-used)
- [Folder Structure](#a-typical-top-level-directory-layout)
- [Install and Run](#install-and-run)
- [Test](#test)
- [Technical Flow](#technical-flow)
- [Truffles Functionl Flow](#truffles-functionl-flow)
- [Types of Role](#types-of-role)
- [Admin Level Functions](#admin-level-functions)
- [Authorized Level Functions](#authorized-level-functions)
- [User Level Functions](#user-level-functions)
- [View Functions for all Roles](#view-functions-for-all-roles)
- [Documentation](#documentation)

## Description
A brief Description of project

## Repo Description
The repository holds the source code for the smart contract implementation of 

## Technologies Used 
(List of technology or external libraries used)
- Soldity
- Openzepplein
- Hardhat
- Chai

## Concepts Used 

## A typical top-level directory layout
    .
    ├── contracts              # Source files (Contains the Solidity Contract)
    ├── Scripts                # Tools and utilities
    ├── Test                   # Automated tests
    ├── hardhat.config         # hardhat confil file
    └── README.md

## Install and Run

- Run `npm install` to install dependencies
- Run `npx hardhat compile` to compile all contracts

## Test  
Run `npx hardhat test` to run automated testing

## Technical Flow

## Functionl Flow

## Types of Role

## Admin Level Functions

## Authorized Level Functions

## User Level Functions

## View Functions for all Roles

## Documentations
`Note: For detailed doc refer the docs folder`



### Commands
`npx hardhat test` OR `npm run test` : To test the smart contract

`npx hardhat clean` OR `npm run clean` : To remove `artifacts` repo / clean compiled code

`npx hardhat compile` OR `npm run compile` : To compile contracts

`npx hardhat size-contracts` OR `npm run contract-size` : get the size of contracts

`npx hardhat coverage --solcoverjs ./.solcover.js --temp build --network hardhat` OR `npm run coverage` : get the coverage report