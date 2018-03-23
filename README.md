# Template Cli

> A command line interface for creating javascript app for quick start. Please read [Javascript Composite UI Document](https://goo.gl/cNnJQB) to know more about type of JavaScript projects.

## Table of Contents
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
* [Updating Template CLI](#updating-template-cli)
* [Generating Ngrx Autonomous Component Project](#generating-ngrx-autonomous-component-project)
* [Generating Ngrx Composite App Project](#generating-ngrx-composite-app)
* [Generating Angular Autonomous Component Project](#generating-angular-autonomous-component)
* [Generating Autonomous Component Project](#generating-autonomous-component)
* [TFS Feed Location](#tfs-feed-location)
* [Source Code](#source-code)

## Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher. Please refer to [prerequisites/local environment settings document.](https://goo.gl/rknhzw)

## Installation

BEFORE YOU INSTALL: please read the [prerequisites](#prerequisites)

    npm i -g @scci-branding/template-cli

## Usage

    template-cli help

## Documentation

    template-cli docs


## Updating Template CLI

To update Template CLI to a new version, you must update global package.

    npm uninstall -g @scci-branding/template-cli
    
    npm cache verify
    
    npm install -g @scci-branding/template-cli

  
## Generating Ngrx Autonomous Component Project
    
    template-cli ngrx product-mangement -s products -f product-management -d "add product feature"

OR

    template-cli ngrx product-mangement --service branding --feature product-management --description "add product feature"

  
Above script will create below project structure to know more about project structure please read [ui composition document](https://goo.gl/cNnJQB).

![](https://lh4.googleusercontent.com/qSRrYJ9ZswyLlogJ_2AqvafgjCf7vihSrQfBnL1IGmIBhislUA9lrfB31L8GpCHUe4PnvwvgHq_cjAE1SFIuXBwQfkzIfMvlbQPBfVrzqOeZQRqPJO4MWjSs4WPvcLyGRNThwObn)

It will also install the required npm packages and then open browser ([http://localhost:4322](http://localhost:4230/)) to show the sample ngrx app. Sample app has add product form.

![](https://lh4.googleusercontent.com/aqix_S6ejHUxz1_cqja6c72t7eB7wQgHbzansu-gfxinlhZKQiUV-sdj8Z-wVCiR-r_l-Wl__Hdcoj0EMGJ0UP--J8535mJyWkAqDSSOvkgWUuZ5ftEhzXKdckJnr2TdzIZ9M-Z2)

The app will automatically reload if you change any of the source files. You can configure the default HTTP host and port used by the development server by updating script section of `package.json` file.

![](https://lh6.googleusercontent.com/f2RHMWuLa8GDcCpDovPl7SLIEtKE4Lc1vBHttm4f1TnTanCOoWw8j2jv3wycuKQAM-sMxjRWpHRfKVFLOGctwHJ1Gp59e8IJegoDMoIzARVhPrjewDdo6m18XD02GhNXbtTAzm2V)

## Generating Ngrx Composite App
Ngrx Composite App is using `NGRX` to do state management. You can give one service app name in order to link your composite app by giving `-l [your service name that you want to link]`
 
    template-cli ngrx-comp e-store -s branding -a e-store-app -d "e-store to manage products" -l @scci-products/product-management
 
OR
  
    template-cli ngrx-comp e-store --service branding --app e-store-app --description "e-store to manage products" --linkservice @scci-products/product-management
    
This will create below project structure to know more about project structure please read [ui composition document](https://goo.gl/cNnJQB)

![](https://lh6.googleusercontent.com/SacClpXGI2IA-YM05oGzXRmyWKtmftn64GZ1k0N_kYdtrB3YfE2aQoaR6FEG0boEZvnWHmT7rCLDQDUKEaXn0w2B5dLL5wSf3l30gNgWkIL_FCp2JiCgqVVHPVi7m2uVb3cxlP0l)
 
 ## Generating Angular Autonomous Component
 This will generate an angular app `spinner-app`. It has one `spinner component`.

    template-cli ng spinner -s branding -f spinner -d "spinner to show while busy"

OR

    template-cli ng spinner --service branding --feature spinner --description "spinner to show while busy"


![](https://lh6.googleusercontent.com/GuJA4TDBXE4G9O-uXeB34MA4x8equLsQa7E9A3SAqdR2DYKppHV2hnjJYP5iL0ZD7vx6wKLTgf51w4mJSAhDlIGl1fvA8sCxgQx04qV7t0dUDyALShKhqqu9z_-mkcX_kgtkcqN0)

## ![](https://lh3.googleusercontent.com/6wyrhnUh7m7vkZfQmbpVZMgempjfGoFdRW3a8OSydWl46zvyZ2ERtGwZAD34J89AQmtHuc-xKzknO907-aKb5od9GfnKNz2HILbAWOaROMOGYp0R4Cr2ULTf4qlp7By899C2XZq8)

## Generating Autonomous Component 
This is typescript only project starter. After installing this template you will find one sample code for `assertion concerns` and its passing `test case.` 
```
template-cli ts my-ts-project -s branding -f assertion-concerns -d "sample typescript project"
```
OR 

```
template-cli ts my-ts-project --service branding --feature assertion-concerns --description "sample typescript project"
```
**![](https://lh5.googleusercontent.com/5oDnKHOOyqrQTY25NQUW2Ja-lxH0rP_bUepAFvuIZJ6pBim53kVt37VYKcE3R9wIeFG-A3SHig9u6J6IgnerOsld_D4ic2K2gvhyub3sA0j5IF3HWgzkAM27NMbcddUtoEN3rLzU)**
## TFS Feed Location

[http://aicpa-tfs:8080/tfs/DefaultCollection/Examinations/\_packaging?feed=StraszAssessmentSystems&\_a=feed](http://aicpa-tfs:8080/tfs/DefaultCollection/Examinations/_packaging?feed=StraszAssessmentSystems&_a=feed)

![](https://lh4.googleusercontent.com/TyuQvfgbUzRp0jpDDDHPNC_8SWQYdMq8Th8T9MGZNjFr2exbdmhrMdnSeQWuUqjVF0OVxtb8xKc_6xYSqFRiVFz5AoCdZFGcv0L2TWweuxSxoir2XJmrfSqm5_mx9B6E5YUdAGHW)

  

## Source Code

> $/ITOps/Modules/template-cli/_integration/template-cli/src

  

![](https://lh3.googleusercontent.com/41IFsaR8g6wkg4ZiIa5pkNOtsmty5lNUzMB0kQ2YViaWl3H9-kxZXpeX4p-IYlDcXHI9qS6JwCCA2TuwJ4grJTzZC3pN4SthkKCSbpBoeH3-p8pvG-CA6WLMPUcb9a4Pr4qEJuTW)
