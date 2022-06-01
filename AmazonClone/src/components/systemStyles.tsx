import React from "react"

// DEVELOPED BY STARTINVEST, 2018, All rights reserved. Do not share, for intended audience only. 
// shared with audience relying on for StartInvest Summer 2022 Internship, subject to terms and conditions per engagement terms. 
// If you are not the correct recipient, destroy and let us know by emailing to info@startinvest.com

  // FONT WEIGHTS : 100',    '200',  '300', '400',  '500', '600',   '700','800',   '900'
  //                thin   extralight light regular medium semibold bold   extrabold black



const systemStyles = {




  headingmap: [
    {
      id: 0,
      fontSize: 200,
      fontWeight: 500,
    },
    {
      id: 1,
      fontSize: 95,
      fontWeight: 400,
    },
    {
      id: 2,
      fontSize: 70,
      fontWeight: 500,
    },
    {
      id: 22,
      fontSize: 60,
      fontWeight: 500,
    },
    {
      id: 25,
      fontSize: 50,
      fontWeight: 700,
    },
    {
      id: 22,
      fontSize: 60,
      fontWeight: 500,
    },
    {
      id: 26,
      fontSize: 50,
      fontWeight: 600,
    },
    {
      id: 3,
      fontSize: 50,
      fontWeight: 500,
    },
    {
      id: 350,
      fontSize: 45,
      fontWeight: 700,
    },
    {
      id: 4,
      fontSize: 40,
      fontWeight: 700,
    },
    {
      id: 45,
      fontSize: 40,
      fontWeight: 500,
    },
    {
      id: 5,
      fontSize: 40,
      fontWeight: 400,
    },
    {
      id: 6,
      fontSize: 35,
      fontWeight: 700,
    },
    {
      id: 64,
      fontSize: 35,
      fontWeight: 600,
    },
    {
      id: 65,
      fontSize: 35,
      fontWeight: 500,
    },
    {
      id: 7,
      fontSize: 35,
      fontWeight: 400,
    },
    {
      id: 8,
      fontSize: 30,
      fontWeight: 700,
    },
    {
      id: 85,
      fontSize: 30,
      fontWeight: 600,
    },
    {
      id: 9,
      fontSize: 30,
      fontWeight: 400,
    },
    {
      id: 10,
      fontSize: 27,
      fontWeight: 700,
    },
    {
      id: 104,
      fontSize: 27,
      fontWeight: 500,
    },
    {
      id: 105,
      fontSize: 27,
      fontWeight: 600,
    },
    {
      id: 11,
      fontSize: 27,
      fontWeight: 400,
    },
    {
      id: 12,
      fontSize: 25,
      fontWeight: 700,
    },
    {
      id: 124,
      fontSize: 25,
      fontWeight: 600,
    },
    {
      id: 125,
      fontSize: 25,
      fontWeight: 500,
    },
    {
      id: 13,
      fontSize: 25,
      fontWeight: 400,
    },
    {
      id: 14,
      fontSize: 21,
      fontWeight: 700,
    },
    {
      id: 145,
      fontSize: 21,
      fontWeight: 600,
    },
    {
      id: 15,
      fontSize: 21,
      fontWeight: 400,
    },
    {
      id: 16,
      fontSize: 18,
      fontWeight: 700,
    },
    {
      id: 165,
      fontSize: 18,
      fontWeight: 600,
    },
    {
      id: 17,
      fontSize: 18,
      fontWeight: 400,
    },
  ],

  colormap: [
    {
      id: 1,
      color: '#0F1012',
      name: 'almost black',
    },
    {
      id: 2,
      color: 'red',
      name: 'sub note 1',
    },
    {
      id: 3,
      color: '#565959',
      name: 'header footer day/night',
    },
    {
      id: 4,
      color: '#5AC53A',
      name: 'header footer day/night',
    },
    {
      id: 5,
      color: '#FEFCFB',
      name: 'almost white',
    },
    {
      id: 6,
      color: '#A83F23',
      name: 'discounted price',
    },
    {
      id: 7,
      color: '#32741E',
      name: 'discounted price',
    },
    {
      id: 8,
      color: '#3d8148',
      name: '',
    },
    {
      id: 9,
      color: '#6e7678',
      name: 'sub note 2',
    },
    {
      id: 10,
      color: '#b65b22',
      name: 'badge 1 background',
    },
    {
      id: 11,
      color: '#d67e32',
      name: 'badge 2 background',
    },
    {
      id: 12,
      color: '#2f6f82',
      name: 'clickable',
    },
    {
      id: 13,
      color: '#d87c2d',
      name: 'frame border, selected perk ',
    },
    {
      id: 14,
      color: '#a3a6ab',
      name: 'frame border, unselected perk ',
    },
    {
      id: 15,
      color: '#469331',
      name: 'inventory available,  perk ',
    },
    {
      id: 16,
      color: '#b02703',
      name: 'notice red',
    },
    {
      id: 17,
      color: '#306F82',
      name: 'selected quantity',
    },
    {
      id: 18,
      color: '#999999',
      name: 'sub note 3',
    },
    {
      id: 31,
      color: '#fbf8f7',
      name: 'almost white 2 background',
    },
    {
      id: 32,
      color: '#1e2023',
      name: 'almost black, background',
    },
    {
      id: 33,
      color: '#f0fcfe',
      name: 'faint light blue green',
    },
    {
      id: 34,
      color: '#f9d94c',
      name: 'button add to card color',
    },
    {
      id: 35,
      color: '#f2a842',
      name: 'button buy now color ',
    },
    {
      id: 36,
      color: '#FAFAFA',
      name: 'backgound perk, no selected',
    },
    {
      id: 37,
      color: '#E3e6e6',
      name: 'divider between sections',
    },
    {
      id: 38,
      color: '#d5d8d8',
      name: 'item divider, table divider',
    },
    {
      id: 39,
      color: '#f3f3f3',
      name: 'table body color shadowed',
    },
    {
      id: 40,
      color: '#b5bdc1',
      name: 'background category percentage for user page',
    },
    {
      id: 41,
      color: '#cde0f2',
      name: 'background category percentage',
    },
    {
      id: 42,
      color: '#f3f3f3',
      name: 'checkout background page',
    },
  ],
}

export default systemStyles
