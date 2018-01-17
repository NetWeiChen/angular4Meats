import {Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as _ from 'underscore';
// import { start } from 'repl';

//default wewill show 10 index in the page, we want to change to 5 upon desire from customer
export class pagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize:number = 10 ){
        let totalPages = Math.ceil(totalItems / pageSize );

        let startPage: number, endPage: number;
// if ( totalPages <= 10) {
//     // if( totalPages <= 5 ){
//             startPage = 1;
//             endPage = totalPages;
//         }else {
//             // if ( currentPage <= 5) {
//            if ( currentPage <= 6 ) {
//                 startPage = 1;
//                endPage = 10;
//             //    endPage = 5;
            
//             }else if ( currentPage + 4 >= totalPages){
//                 startPage = totalPages - 9;
//                 // startPage = totalPages - 4;
//                 endPage = totalPages;
//             }else {
//                 startPage = currentPage - 5;
//                 endPage = currentPage + 4;
               
//             }
//         }



    if( totalPages <= 5 ){
            startPage = 1;
            endPage = totalPages;
        }else {
            if ( currentPage <= 5) {
         
                startPage = 1;
              
               endPage = 5;
            
            }else if ( currentPage + 4 >= totalPages){
               
                startPage = totalPages - 4;
                endPage = totalPages;
            }else {
                startPage = currentPage - 4;
                endPage = currentPage;
               
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1 , totalItems-1);
        let pages = _.range(startPage, endPage + 1);

        return {
            totalItems:totalItems,
            currentPage:currentPage,
            pageSize:pageSize,
            totalPages:totalPages,
            startPage: startPage,
            endPage:endPage,
            startIndex:startIndex,
            endIndex:endIndex,
            pages:pages
        };

    }
}