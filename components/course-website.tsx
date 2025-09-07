/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { ComponentPropsWithoutRef } from 'react';
import { BookOpen, ChevronRight, Sun, Moon, ChevronDown, Menu, MessageCircle, X, ChevronLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import { useRouter, usePathname, ReadonlyURLSearchParams } from 'next/navigation'
import remarkGfm from 'remark-gfm';
import Link from 'next/link'
import Image from 'next/image';
import chapter1_1_wi from '../content/wi/chapter1_1.md'
import chapter1_2_wi from '../content/wi/chapter1_2.md'
import chapter1_3_wi from '../content/wi/chapter1_3.md'
import chapter2_1_wi from '../content/wi/chapter2_1.md'
import chapter2_2_wi from '../content/wi/chapter2_2.md'
import chapter2_3_wi from '../content/wi/chapter2_3.md'
import chapter2_4_wi from '../content/wi/chapter2_4.md'
import chapter4_4_wi from '../content/wi/chapter4_4.md'

import chapter1_1_bwe from '../content/bwe/chapter1_1.md'
import chapter2_1_bwe from '../content/bwe/chapter2_1.md'
import chapter2_2_bwe from '../content/bwe/chapter2_2.md'
import chapter2_3_bwe from '../content/bwe/chapter2_3.md'
import chapter2_4_bwe from '../content/bwe/chapter2_4.md'
import chapter3_1_bwe from '../content/bwe/chapter3_1.md'
import chapter3_2_bwe from '../content/bwe/chapter3_2.md'
import chapter3_3_bwe from '../content/bwe/chapter3_3.md'

import chapter13_1_bwe from '../content/bwe/chapter13_1.md'
import chapter13_2_bwe from '../content/bwe/chapter13_2.md'
import chapter14_1_bwe from '../content/bwe/chapter14_1.md'
import chapter14_2_bwe from '../content/bwe/chapter14_2.md'
import chapter14_3_bwe from '../content/bwe/chapter14_3.md'
import chapter15_1_bwe from '../content/bwe/chapter15_1.md'

import chapter1_1_python from '../content/python/chapter1_1.md'
import chapter1_2_python from '../content/python/chapter1_2.md'
import chapter1_3_python from '../content/python/chapter1_3.md'
import chapter2_1_python from '../content/python/chapter2_1.md'
import chapter2_2_python from '../content/python/chapter2_2.md'
import chapter2_3_python from '../content/python/chapter2_3.md'
import chapter2_4_python from '../content/python/chapter2_4.md'
import chapter3_1_python from '../content/python/chapter3_1.md'
import chapter3_2_python from '../content/python/chapter3_2.md'
import chapter3_3_python from '../content/python/chapter3_3.md'
import chapter4_1_python from '../content/python/chapter4_1.md'
import chapter4_2_python from '../content/python/chapter4_2.md'
import chapter4_3_python from '../content/python/chapter4_3.md'
import chapter4_4_python from '../content/python/chapter4_4.md'
import chapter4_5_python from '../content/python/chapter4_5.md'
import chapter4_6_python from '../content/python/chapter4_6.md'
import chapter5_1_python from '../content/python/chapter5_1.md'
import chapter5_2_python from '../content/python/chapter5_2.md'
import chapter6_1_python from '../content/python/chapter6_1.md'
import chapter6_2_python from '../content/python/chapter6_2.md'
import chapter6_3_python from '../content/python/chapter6_3.md'
import chapter6_4_python from '../content/python/chapter6_4.md'
import chapter6_5_python from '../content/python/chapter6_5.md'
import BigOComplexityChart from './big-o-chart';
import { useChat } from 'ai/react'
import { MemoizedMarkdown } from './memoized-markdown'
import { Streak } from './streak';
import { Achievements } from './achievements';
import { Leaderboard } from './leaderboard';
import { Quiz } from './quiz';
import { CodeChallenge } from './code-challenge';
import { ChapterQuiz } from './chapter-quiz';


const courses = [
  {
    id: 'inw-wi',
    title: 'Wiskunde-richtingen: Algoritmen en Python',
    description: 'Graadcursus (III-Inf-d) voor wiskunde-richtingen (Economie-Wiskunde, Grieks-Wiskunde, Latijn-Wiskunde, Wetenschappen-Wiskunde). Focus op algoritmen en datastructuren, efficiënt programmeren in Python, algoritmische technieken (bv. recursie, greedy, divide-and-conquer), numerieke methodes gekoppeld aan wiskunde, en in/uitvoer van externe gegevens. Inzetbaar in 5e of 6e jaar.',
    chapters: [
      { 
        id: 1, 
        title: "1. Installatie",
        subchapters: [
          { id: '1.1', title: "1.1 Installatie: Python en VS Code" },
          { id: '1.2', title: "1.2 Python testen" },
          { id: '1.3', title: "1.3 VS Code configureren" },
        ]
      },
      {
        id: 2,
        title: "2. Variabelen en Datatypes",
        subchapters: [
          { id: '2.1', title: "2.1 Variabelen" },
          { id: '2.2', title: "2.2 Datatypes" },
          { id: '2.3', title: "2.3 Gebruikersinvoer" },
          { id: '2.4', title: "2.4 Oefeningen" },
        ]
      },
      {
        id: 3,
        title: "3. Vergelijkingen en If-statements",
        subchapters: [
          { id: '3.1', title: "3.1 Vergelijkingen en Voorwaarden" },
          { id: '3.2', title: "3.2 If-statements" },
          { id: '3.3', title: "3.3 Oefeningen" },
        ]
      },
      {
        id: 4,
        title: "4. Datastructuren en Herhaling",
        subchapters: [
          { id: '4.1', title: "4.1 Lijsten" },
          { id: '4.2', title: "4.2 Itereren over Lijsten" },
          { id: '4.3', title: "4.3 Oefeningen" },
          { id: '4.4', title: "4.4 Dictionaries (Woordenboeken)" },
          { id: '4.5', title: "4.5 While Loops" },
          { id: '4.6', title: "4.6 Oefeningen: Dictionaries en While Loops" },
        ]
      },
      {
        id: 5, 
        title: "5. Functies", 
        subchapters: [
          { id: '5.1', title: "5.1 Functies" },
          { id: '5.2', title: "5.2 Oefeningen: Functies" },
        ]
      },
      {
        id: 6,
        title: "6. Introductie tot Algoritmen en Efficiëntie",
        subchapters: [
          { id: '6.1', title: "6.1 Wat is een Algoritme?" },
          { id: '6.2', title: "6.2 Efficiëntie: Waarom is het Belangrijk?" },
          { id: '6.3', title: "6.3 Meten van Efficiëntie: Big O Notatie" },
          { id: '6.4', title: "6.4 Analyse van Eenvoudige Algoritmen" },
          { id: '6.5', title: "6.5 Oefeningen: Analyse en Vergelijking" },
        ]
      }
    ]
  },
  {
    id: 'inw-bcsw',
    title: 'Biotechnologische en chemische STEM-wetenschappen: Informaticawetenschappen (graad)',
    description: 'Graadcursus informaticawetenschappen binnen III-BCSW-d (1 graaduur): algoritmen en datastructuren, algoritmische technieken (bv. recursie, greedy, divide-and-conquer), gestructureerde programmeertaal (Python) en gebruik van softwarebibliotheken, met in-/uitvoer van externe gegevens. Af te stemmen met STEM-projecten; inzetbaar in 5e en/of 6e jaar.',
    chapters: [
      { 
        id: 1, 
        title: "1. Installatie",
        subchapters: [
          { id: '1.1', title: "1.1 Installatie: Python en VS Code" },
          { id: '1.2', title: "1.2 Python testen" },
          { id: '1.3', title: "1.3 VS Code configureren" },
        ]
      },
      {
        id: 2,
        title: "2. Variabelen en Datatypes",
        subchapters: [
          { id: '2.1', title: "2.1 Variabelen" },
          { id: '2.2', title: "2.2 Datatypes" },
          { id: '2.3', title: "2.3 Gebruikersinvoer" },
          { id: '2.4', title: "2.4 Oefeningen" },
        ]
      },
      {
        id: 3,
        title: "3. Vergelijkingen en If-statements",
        subchapters: [
          { id: '3.1', title: "3.1 Vergelijkingen en Voorwaarden" },
          { id: '3.2', title: "3.2 If-statements" },
          { id: '3.3', title: "3.3 Oefeningen" },
        ]
      },
      {
        id: 4,
        title: "4. Datastructuren en Herhaling",
        subchapters: [
          { id: '4.1', title: "4.1 Lijsten" },
          { id: '4.2', title: "4.2 Itereren over Lijsten" },
          { id: '4.3', title: "4.3 Oefeningen" },
          { id: '4.4', title: "4.4 Dictionaries (Woordenboeken)" },
          { id: '4.5', title: "4.5 While Loops" },
          { id: '4.6', title: "4.6 Oefeningen: Dictionaries en While Loops" },
        ]
      },
      {
        id: 5, 
        title: "5. Functies", 
        subchapters: [
          { id: '5.1', title: "5.1 Functies" },
          { id: '5.2', title: "5.2 Oefeningen: Functies" }
        ]
      },
      {
        id: 6,
        title: "6. Introductie tot Algoritmen en Efficiëntie",
        subchapters: [
          { id: '6.1', title: "6.1 Wat is een Algoritme?" },
          { id: '6.2', title: "6.2 Efficiëntie: Waarom is het Belangrijk?" },
          { id: '6.3', title: "6.3 Meten van Efficiëntie: Big O Notatie" },
          { id: '6.4', title: "6.4 Analyse van Eenvoudige Algoritmen" },
          { id: '6.5', title: "6.5 Oefeningen: Analyse en Vergelijking" },
        ]
      }
    ]
  },
  {
    id: 'inw-bwe',
    title: 'Bedrijfswetenschappen: Databanken, SQL, Big Data en BI (graad)',
    description: 'Graadcursus voor Bedrijfswetenschappen: relationele databanken (ERD, normalisatie), SQL (queries en DML), datawarehousing en ETL/ELT, big data, en visualisaties met BI-tools. In te plannen in 5e en/of 6e jaar.',
    chapters: [
      {
        id: 1,
        title: "1. Introductie: Relationele Databanken en Big Data",
        subchapters: [
          { id: '1.1', title: "1.1 Introductie en Cursusdoelen" },
          { id: '1.2', title: "1.2 Cursusstructuur en Kernconcepten" },
        ]
      },
      {
        id: 2,
        title: "2. Tabellen en Gegevensorganisatie met Excel",
        subchapters: [
          { id: '2.1', title: "2.1 Basisprincipes van Excel-spreadsheets" },
          { id: '2.2', title: "2.2 Excel Interface en Gegevensinvoer" },
          { id: '2.3', title: "2.3 Celformattering in Excel" },
          { id: '2.4', title: "2.4 Oefeningen" },
          { id: '2.5', title: "2.5 Data visualisatie" },
        ]
      },
      {
        id: 3,
        title: "3. Databanken",
        subchapters: [
          { id: '3.1', title: "3.1 Introductie tot Databanken" },
          { id: '3.2', title: "3.2 Werktitel" },
          { id: '3.3', title: "3.3 Ook een werktitel" },
        ]
      },
      {
        id: 4,
        title: "4. Data Visualisatie met Excel",
        subchapters: [
          { id: '4.1', title: "4.1 Soorten grafieken en wanneer gebruiken" },
          { id: '4.2', title: "4.2 Grafieken maken en aanpassen" },
          { id: '4.3', title: "4.3 Sparklines" },
          { id: '4.4', title: "4.4 Dashboardbasics" },
        ]
      },
      {
        id: 5,
        title: "5. Introductie tot Databases",
        subchapters: [
          { id: '5.1', title: "5.1 Wat is een database?" },
          { id: '5.2', title: "5.2 Verschillen tussen spreadsheets en databases" },
          { id: '5.3', title: "5.3 Soorten databases (focus op relationele databases)" },
          { id: '5.4', title: "5.4 Basisdatabase terminologie" },
        ]
      },
      {
        id: 6,
        title: "6. Ontwerpen van een eenvoudige Database",
        subchapters: [
          { id: '6.1', title: "6.1 Database structuur plannen" },
          { id: '6.2', title: "6.2 Tabellen maken en velden definiëren" },
          { id: '6.3', title: "6.3 Primaire en vreemde sleutels" },
          { id: '6.4', title: "6.4 Relaties tussen tabellen" },
        ]
      },
      {
        id: 7,
        title: "7. Introductie tot SQL",
        subchapters: [
          { id: '7.1', title: "7.1 Basis SQL syntax" },
          { id: '7.2', title: "7.2 SELECT statements" },
          { id: '7.3', title: "7.3 Gegevens filteren met WHERE" },
          { id: '7.4', title: "7.4 Gegevens sorteren met ORDER BY" },
        ]
      },
      {
        id: 8,
        title: "8. Geavanceerde SQL Queries",
        subchapters: [
          { id: '8.1', title: "8.1 Tabellen joinen" },
          { id: '8.2', title: "8.2 Aggregate functies" },
          { id: '8.3', title: "8.3 Subqueries" },
          { id: '8.4', title: "8.4 Tabellen maken en wijzigen" },
        ]
      },
      {
        id: 9,
        title: "9. Big Data Concepten",
        subchapters: [
          { id: '9.1', title: "9.1 Wat is Big Data?" },
          { id: '9.2', title: "9.2 De 5 V's van Big Data" },
          { id: '9.3', title: "9.3 Overzicht van Big Data technologieën" },
          { id: '9.4', title: "9.4 Big Data use cases en voorbeelden" },
        ]
      },
      {
        id: 10,
        title: "10. Introductie tot Data Warehousing",
        subchapters: [
          { id: '10.1', title: "10.1 Wat is een data warehouse?" },
          { id: '10.2', title: "10.2 Data warehouse architectuur" },
          { id: '10.3', title: "10.3 ETL processen" },
          { id: '10.4', title: "10.4 Verschillen tussen operationele en analytische databases" },
        ]
      },
      {
        id: 11,
        title: "11. Data Analyse en Visualisatie Tools",
        subchapters: [
          { id: '11.1', title: "11.1 Introductie tot business intelligence tools" },
          { id: '11.2', title: "11.2 Overzicht van populaire BI platforms" },
          { id: '11.3', title: "11.3 Basisrapporten en dashboards maken" },
          { id: '11.4', title: "11.4 Principes van data storytelling" },
        ]
      },
      {
        id: 12,
        title: "12. Eindproject: Bouwen van een Data Oplossing",
        subchapters: [
          { id: '12.1', title: "12.1 Geleerde concepten toepassen op een echt probleem" },
          { id: '12.2', title: "12.2 Database ontwerpen en implementeren" },
          { id: '12.3', title: "12.3 Gegevens analyseren met SQL" },
          { id: '12.4', title: "12.4 Visualisaties en rapporten maken" },
        ]
      },
      {
        id: 13,
        title: "13. Introductie",
        subchapters: [
          { id: '13.1', title: "13.1 Overzicht" },
          { id: '13.2', title: "13.2 Herhaling Excel" },
        ]
      },
      {
        id: 14,
        title: "14. Introductie tot Databases en Big Data",
        subchapters: [
          { id: '14.1', title: "14.1 Van Excel naar Databases" },
          { id: '14.2', title: "14.2 Introductie tot Big Data" },
          { id: '14.3', title: "14.3 Business Intelligence vs. Big Data" },
        ]
      },
      {
        id: 15,
        title: "15. Relationele Databases",
        subchapters: [
          { id: '15.1', title: "15.1 Introductie tot Relationele Databases" },
        ]
      },
      {
        id: 16,
        title: "16. SQL Fundamentals",
        subchapters: [
          { id: '16.1', title: "16.1 Introductie tot SQL" },
          { id: '16.2', title: "16.2 SELECT Queries en Filtering" },
          { id: '16.3', title: "16.3 Joins en Subqueries" },
          { id: '16.4', title: "16.4 Data Manipulatie en Definitie" },
        ]
      },
      {
        id: 17,
        title: "17. Datawarehousing en Business Intelligence",
        subchapters: [
          { id: '17.1', title: "17.1 Concepten van Datawarehousing" },
          { id: '17.2', title: "17.2 ETL Processen" },
          { id: '17.3', title: "17.3 Introductie tot Power BI" },
          { id: '17.4', title: "17.4 Dashboards en Rapportages" },
        ]
      },
      {
        id: 18,
        title: "18. Introductie tot Python",
        subchapters: [
          { id: '18.1', title: "18.1 Python Basics" },
          { id: '18.2', title: "18.2 Variabelen en Datatypes" },
          { id: '18.3', title: "18.3 Controlestructuren" },
          { id: '18.4', title: "18.4 Functies en Modules" },
        ]
      },
      {
        id: 19,
        title: "19. Python voor Data-analyse",
        subchapters: [
          { id: '19.1', title: "19.1 Numpy en Pandas Basics" },
          { id: '19.2', title: "19.2 Data Cleaning en Preprocessing" },
          { id: '19.3', title: "19.3 Data Visualisatie met Matplotlib" },
          { id: '19.4', title: "19.4 Statistische Analyse" },
        ]
      },
      {
        id: 20,
        title: "20. Geavanceerde Data-analyse Technieken",
        subchapters: [
          { id: '20.1', title: "20.1 Machine Learning Basics" },
          { id: '20.2', title: "20.2 Regressie en Classificatie" },
          { id: '20.3', title: "20.3 Clustering en Dimensionaliteitsreductie" },
          { id: '20.4', title: "20.4 Tijdreeksanalyse" },
        ]
      },
      {
        id: 21,
        title: "21. Big Data Technologieën",
        subchapters: [
          { id: '21.1', title: "21.1 Hadoop en MapReduce" },
          { id: '21.2', title: "21.2 Apache Spark Basics" },
          { id: '21.3', title: "21.3 NoSQL Databases" },
          { id: '21.4', title: "21.4 Big Data Use Cases" },
          { id: '21.5', title: "21.5 Cloud Computing voor Big Data" },
        ]
      },
      {
        id: 22,
        title: "22. Eindproject: Data-analyse in de Praktijk",
        subchapters: [
          { id: '22.1', title: "22.1 Projectdefinitie en Dataverzameling" },
          { id: '22.2', title: "22.2 Data-analyse en Modellering" },
          { id: '22.3', title: "22.3 Visualisatie en Rapportage" },
          { id: '22.4', title: "22.4 Presentatie en Evaluatie" },
        ]
      }
    ]
  },
  
];

const chapterContent = {
  'inw-wi': {
    '1.1': chapter1_1_wi,
    '1.2': chapter1_2_wi,
    '1.3': chapter1_3_wi,
    '2.1': chapter2_1_wi,
    '2.2': chapter2_2_wi,
    '2.3': chapter2_3_wi,
    '2.4': chapter2_4_wi,
    '3.1': chapter3_1_python,
    '3.2': chapter3_2_python,
    '3.3': chapter3_3_python,
    '4.1': chapter4_1_python,
    '4.2': chapter4_2_python,
    '4.3': chapter4_3_python,
    '4.4': chapter4_4_wi,
    '4.5': chapter4_5_python,
    '4.6': chapter4_6_python,
    '5.1': chapter5_1_python,
    '5.2': chapter5_2_python,
    '6.1': chapter6_1_python,
    '6.2': chapter6_2_python,
    '6.3': chapter6_3_python,
    '6.4': chapter6_4_python,
    '6.5': chapter6_5_python,
  },
  'inw-bcsw': {
    '1.1': chapter1_1_python,
    '1.2': chapter1_2_python,
    '1.3': chapter1_3_python,
    '2.1': chapter2_1_python,
    '2.2': chapter2_2_python,
    '2.3': chapter2_3_python,
    '2.4': chapter2_4_python,
    '3.1': chapter3_1_python,
    '3.2': chapter3_2_python,
    '3.3': chapter3_3_python,
    '4.1': chapter4_1_python,
    '4.2': chapter4_2_python,
    '4.3': chapter4_3_python,
    '4.4': chapter4_4_python,
    '4.5': chapter4_5_python,
    '4.6': chapter4_6_python,
    '5.1': chapter5_1_python,
    '5.2': chapter5_2_python,
    '6.1': chapter6_1_python,
    '6.2': chapter6_2_python,
    '6.3': chapter6_3_python,
    '6.4': chapter6_4_python,
    '6.5': chapter6_5_python,
  },
  'inw-bwe': {
    '1.1': chapter1_1_bwe,
    '2.1': chapter2_1_bwe,
    '2.2': chapter2_2_bwe,
    '2.3': chapter2_3_bwe,
    '2.4': chapter2_4_bwe,
    '3.1': chapter3_1_bwe,
    '3.2': chapter3_2_bwe,
    '3.3': chapter3_3_bwe,
    '13.1': chapter13_1_bwe,
    '13.2': chapter13_2_bwe,
    '14.1': chapter14_1_bwe,
    '14.2': chapter14_2_bwe,
    '14.3': chapter14_3_bwe,
    '15.1': chapter15_1_bwe,
  },
  
};

function ChatInterface({ 
  darkMode, 
  currentContent 
}: { 
  darkMode: boolean;
  currentContent?: string;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    experimental_throttle: 50,
    initialMessages: [
      {
        id: 'system',
        role: 'system',
        content: `You are a helpful teaching assistant for an informatics course that uses basic python. Answer questions about programming and related topics. Respond in the same language as the user (Dutch or English). Never give a straight answer, but rather ask a question to the user to help them find the answer themselves.${
          currentContent 
            ? `\n\nThe user is currently looking at the following chapter content:\n${currentContent}`
            : ''
        }`
      }
    ]
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isOpen ? 'w-full md:w-[800px] max-w-[calc(100vw-2rem)]' : 'w-auto'}`}>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          darkMode ? 'bg-white text-black' : 'bg-black text-white'
        } p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className={`
          absolute bottom-16 right-0 w-full md:w-[800px] 
          h-[600px] max-h-[calc(100vh-8rem)]
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
          rounded-lg shadow-xl border-2
          ${darkMode ? 'border-white' : 'border-black'}
          flex flex-col
        `}>
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages
              .filter(message => message.role !== 'system')
              .map(message => (
                <div key={message.id} className={`
                  flex flex-col gap-1 ${message.role === 'assistant' ? 'items-start' : 'items-end'}
                `}>
                  {message.role === 'assistant' && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">
                      Meneer Schuyten
                    </span>
                  )}
                  <div className={`
                    flex gap-3 ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}
                    w-full
                  `}>
                    <div className={`
                      max-w-[80%] rounded-lg p-3 
                      prose dark:prose-invert
                      prose-pre:max-w-full prose-pre:overflow-x-auto
                      prose-img:max-w-full prose-img:rounded
                      prose-code:whitespace-pre-wrap
                      ${message.role === 'assistant' 
                        ? (darkMode ? 'bg-gray-700' : 'bg-gray-100')
                        : (darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white')}
                    `}>
                      <div className="max-w-full overflow-x-auto">
                        <MemoizedMarkdown content={message.content} id={message.id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question..."
                className={`
                  flex-1 rounded-lg px-4 py-2 
                  ${darkMode 
                    ? 'bg-gray-700 text-white border-gray-600' 
                    : 'bg-gray-100 text-black border-gray-300'}
                  border focus:outline-none focus:ring-2 focus:ring-blue-500
                `}
              />
              <button
                type="submit"
                className={`
                  px-4 py-2 rounded-lg
                  ${darkMode 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'}
                  transition-colors
                `}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export function CourseWebsite({ searchParams }: { searchParams: ReadonlyURLSearchParams | null }) {
  const router = useRouter()
  const pathname = usePathname()

  const [darkMode, setDarkMode] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState(0)
  const [selectedSubchapter, setSelectedSubchapter] = useState('')
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({})
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const course = searchParams?.get('course')
    const chapter = searchParams?.get('chapter')
    const subchapter = searchParams?.get('subchapter')

    if (course) setSelectedCourse(course)
    if (chapter) setSelectedChapter(parseInt(chapter))
    if (subchapter) setSelectedSubchapter(subchapter)
  }, [searchParams])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const toggleChapterExpansion = (chapterId: number) => {
    setExpandedChapters((prev: Record<number, boolean>) => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }))
  }

  const navigateChapter = (direction: 'prev' | 'next') => {
    const selectedCourseData = courses.find(c => c.id === selectedCourse);
    if (!selectedCourseData) return;

    const currentChapterIndex = selectedCourseData.chapters.findIndex(chapter => chapter.id === selectedChapter);
    if (currentChapterIndex === -1) return;

    const currentChapter = selectedCourseData.chapters[currentChapterIndex];
    const currentSubchapterIndex = currentChapter.subchapters.findIndex(subchapter => subchapter.id === selectedSubchapter);
    if (currentSubchapterIndex === -1) return;

    let newChapter = selectedChapter;
    let newSubchapter = selectedSubchapter;

    if (direction === 'next') {
      if (currentSubchapterIndex < currentChapter.subchapters.length - 1) {
        newSubchapter = currentChapter.subchapters[currentSubchapterIndex + 1].id;
      } else if (currentChapterIndex < selectedCourseData.chapters.length - 1) {
        newChapter = selectedCourseData.chapters[currentChapterIndex + 1].id;
        newSubchapter = selectedCourseData.chapters[currentChapterIndex + 1].subchapters[0].id;
      }
    } else {
      if (currentSubchapterIndex > 0) {
        newSubchapter = currentChapter.subchapters[currentSubchapterIndex - 1].id;
      } else if (currentChapterIndex > 0) {
        newChapter = selectedCourseData.chapters[currentChapterIndex - 1].id;
        newSubchapter = selectedCourseData.chapters[currentChapterIndex - 1].subchapters.slice(-1)[0].id;
      }
    }

    router.push(`${pathname}?course=${selectedCourse}&chapter=${newChapter}&subchapter=${newSubchapter}`)
  }

  useEffect(() => {
    if (selectedSubchapter) {
      // Check if Codapi script is already loaded
      if (!document.querySelector('script[src*="codapi"]')) {
        const script = document.createElement('script')
        script.src = 'https://codapi.org/scripts/codapi-bundle.js'
        script.async = true
        script.crossOrigin = 'anonymous'
        document.body.appendChild(script)
        script.onload = () => {
          if ('Codapi' in window) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).Codapi.init();
          }
        }
      } else {
        // If script is already loaded, reinitialize Codapi
        if ('Codapi' in window) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).Codapi.init();
        }
      }
    }
  }, [selectedSubchapter])

  const LandingPage = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-black dark:border-white max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4">Informaticawetenschappen</h1>
        <h2 className="text-2xl mb-4">Kies een cursus om te beginnen</h2>
        <p className="mb-4 text-lg">
          Open‑source cursussen informaticawetenschappen voor de derde graad, afgestemd op de minimumdoelen van Katholiek Onderwijs Vlaanderen. 
          Volledig aanpasbaar per school en onmiddellijk inzetbaar.
        </p>
        <ul className="list-disc pl-5 mb-6 text-lg">
          <li>Direct inzetbaar via deze website (geen installatie vereist)</li>
          <li>Graad-gebaseerd: inzetbaar in 5e en/of 6e jaar</li>
          <li>Actief onderhouden en recent geüpdatet (09/2025)</li>
          <li>Inclusief oefeningen en code-uitvoering</li>
        </ul>
        <p className="mb-6 text-lg">
          Snelste start: gebruik deze website meteen als lesmateriaal (geen installatie vereist). 
          Wil je de inhoud aanpassen aan jouw context, dan staat de broncode op 
          <a href="https://github.com/Schuyten/inw-cursus" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> mijn GitHub</a>. 
          Aanbevolen: <strong>fork</strong> de repository om je eigen versie te beheren en eenvoudig upstream updates te volgen. 
        </p>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`${pathname}?course=${course.id}&chapter=1&subchapter=1.1`}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="mb-4">{course.description}</p>
              <button 
                onClick={() => {
                  setSelectedCourse(course.id);
                  setSelectedChapter(1);
                  setSelectedSubchapter(course.chapters[0].subchapters[0].id);
                }} 
                className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                Start cursus
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  const getChapterTitle = () => {
    if (!selectedCourse || !selectedChapter || !selectedSubchapter) return '';
    
    const course = courses.find(c => c.id === selectedCourse);
    if (!course) return '';
    
    const chapter = course.chapters.find(c => c.id === Number(selectedChapter));
    if (!chapter) return '';
    
    const subchapter = chapter.subchapters.find(s => s.id === selectedSubchapter);
    return subchapter ? subchapter.title : '';
  };

  const getChapterContent = () => {
    if (!selectedCourse || !selectedSubchapter) return '';
    
    return chapterContent[selectedCourse as keyof typeof chapterContent]?.[selectedSubchapter as keyof (typeof chapterContent)[keyof typeof chapterContent]] || '';
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex-1 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <header className="bg-white dark:bg-black p-4 flex justify-between items-center border-b-2 border-black dark:border-white">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white"
              aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isSidebarOpen ? <ChevronLeft className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold">
              {selectedCourse ? courses.find(c => c.id === selectedCourse)?.title : 'Informaticawetenschappen'}
            </h1>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-black dark:border-white">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>
        
        {!selectedCourse ? (
          <LandingPage />
        ) : (
          <div className="flex flex-1 p-8 gap-8">
            <nav className={`
              ${isSidebarOpen ? 'w-64 p-4' : 'w-16 p-2'} 
              overflow-hidden transition-all duration-300 
              bg-white dark:bg-gray-800 rounded-lg shadow-lg 
              border-2 border-black dark:border-white
            `}>
              {isSidebarOpen ? (
                <div className="opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold mb-4">Hoofdstukken</h2>
                  <ul>
                    {courses.find(c => c.id === selectedCourse)?.chapters.map((chapter) => (
                      <li key={chapter.id} className="mb-2">
                        <button
                          onClick={() => toggleChapterExpansion(chapter.id)}
                          className={`flex items-center w-full p-2 rounded-lg transition duration-300 ${
                            selectedChapter === chapter.id 
                              ? 'bg-black text-white dark:bg-white dark:text-black' 
                              : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-left truncate">{chapter.title}</span>
                          <ChevronDown className={`w-4 h-4 ml-auto flex-shrink-0 transition-transform duration-300 ${expandedChapters[chapter.id] ? 'transform rotate-180' : ''}`} />
                        </button>
                        {expandedChapters[chapter.id] && (
                          <ul className="ml-4 mt-2">
                            {chapter.subchapters.map((subchapter) => (
                              <li key={subchapter.id}>
                                <button
                                  onClick={() => {
                                    router.push(`${pathname}?course=${selectedCourse}&chapter=${chapter.id}&subchapter=${subchapter.id}`)
                                  }}
                                  className={`flex items-center w-full p-2 rounded-lg transition duration-300 ${
                                    selectedSubchapter === subchapter.id
                                      ? 'bg-gray-300 dark:bg-gray-600'
                                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                  }`}
                                >
                                  <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                                  <span className="text-left truncate">{subchapter.title}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  {courses.find(c => c.id === selectedCourse)?.chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        setIsSidebarOpen(true);
                        toggleChapterExpansion(chapter.id);
                      }}
                      className={`p-2 mb-2 rounded-lg transition duration-300 flex items-center ${
                        selectedChapter === chapter.id 
                          ? 'bg-black text-white dark:bg-white dark:text-black' 
                          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      title={chapter.title}
                    >
                      <BookOpen className="w-5 h-5 mr-1" />
                      <span className="text-sm font-semibold">{chapter.id}</span>
                    </button>
                  ))}
                </div>
              )}
            </nav>
            
            <main className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-black dark:border-white overflow-auto">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3 mt-6" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-semibold mb-2 mt-4" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                  a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                  code: ({inline, className, children, ...props}: ComponentPropsWithoutRef<'code'> & { inline?: boolean }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vs as React.ComponentProps<typeof SyntaxHighlighter>}
                        language={match[1]}
                        PreTag="div"
                        {...props as React.ComponentProps<typeof SyntaxHighlighter>}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-200 dark:bg-gray-700 rounded px-1" {...props}>
                        {children}
                      </code>
                    )
                  },
                  table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
                    <table className="border-collapse border-2 border-gray-300 my-4 rounded-lg overflow-hidden" {...props}>
                      {children}
                    </table>
                  ),
                  thead: ({ children, ...props }: ComponentPropsWithoutRef<'thead'>) => (
                    <thead className="bg-gray-100" {...props}>{children}</thead>
                  ),
                  tbody: ({ children, ...props }: ComponentPropsWithoutRef<'tbody'>) => (
                    <tbody {...props}>{children}</tbody>
                  ),
                  tr: ({ children, ...props }: ComponentPropsWithoutRef<'tr'>) => (
                    <tr className="border-b border-gray-300" {...props}>{children}</tr>
                  ),
                  td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
                    <td className="border-x border-gray-300 px-4 py-2" {...props}>{children}</td>
                  ),
                  th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
                    <th className="border-x border-gray-300 px-4 py-2 font-bold" {...props}>
                      {children}
                    </th>
                  ),
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  img: ({ node, ...props }: { node?: any; [key: string]: any }) => {
                    return (
                      <div className="my-4">
                        <Image
                          src={props.src || ''}
                          alt={props.alt || ''}
                          width={500}
                          height={300}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                          }}
                          className="rounded-lg"
                        />
                      </div>
                    )
                  },
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  bigochart: ({node, ...props}: { node?: unknown, [key: string]: any }) => <BigOComplexityChart {...props} />,
                } as ComponentPropsWithoutRef<typeof ReactMarkdown>['components']}
                rehypePlugins={[rehypeRaw]}
              >
                {chapterContent[selectedCourse as keyof typeof chapterContent]?.[selectedSubchapter as keyof (typeof chapterContent)[keyof typeof chapterContent]] || '# Selecteer een hoofdstuk om te beginnen'}
              </ReactMarkdown>
              {selectedSubchapter && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => navigateChapter('prev')}
                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    disabled={selectedChapter === 1 && selectedSubchapter === '1.1'}
                  >
                    Vorige
                  </button>
                  <button
                    onClick={() => navigateChapter('next')}
                    className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    disabled={
                      selectedChapter === courses.find(c => c.id === selectedCourse)?.chapters.at(-1)?.id &&
                      selectedSubchapter === courses.find(c => c.id === selectedCourse)?.chapters.at(-1)?.subchapters.at(-1)?.id
                    }
                  >
                    Volgende
                  </button>
                </div>
              )}
            </main>
          </div>
        )}
      </div>
      
      <footer className="bg-white dark:bg-black p-4 text-center text-sm border-t-2 border-black dark:border-white">
        <p>&copy; 2025 INW - door Matthias Schuyten. Alle rechten voorbehouden.</p>
      </footer>
      
      <ChatInterface 
        darkMode={darkMode} 
        currentContent={
          selectedCourse && selectedSubchapter 
            ? chapterContent[selectedCourse as keyof typeof chapterContent]?.[selectedSubchapter as keyof (typeof chapterContent)[keyof typeof chapterContent]]
            : undefined
        }
      />

      {selectedCourse && (
        <div className="bg-white dark:bg-gray-800 p-4 mb-4 rounded-lg shadow-md border-2 border-black dark:border-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <ProgressBar 
              currentCourse={selectedCourse} 
              currentChapter={selectedChapter} 
              currentSubchapter={selectedSubchapter} 
            />
            
            <div className="flex items-center gap-3">
              <Streak />
              <Achievements currentCourse={selectedCourse} />
              <Leaderboard />
            </div>
          </div>
        </div>
      )}

      {selectedChapter && selectedSubchapter && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-black dark:border-white">
          
          <ChapterQuiz 
            chapterId={selectedSubchapter} 
            currentCourse={selectedCourse!} 
          />
        </div>
      )}
    </div>
  )
}

function ResumeButton() {
  const router = useRouter()
  const pathname = usePathname()

  const handleResume = () => {
    const lastPosition = localStorage.getItem('lastPosition')
    if (lastPosition) {
      const { course, chapter, subchapter } = JSON.parse(lastPosition)
      router.push(`${pathname}?course=${course}&chapter=${chapter}&subchapter=${subchapter}`)
    }
  }

  return (
    <button
      onClick={handleResume}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Hervat laatste positie
    </button>
  )
}

function ProgressBar({ currentCourse, currentChapter, currentSubchapter }: { 
  currentCourse: string; 
  currentChapter: number | string; 
  currentSubchapter: string; 
}) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`progress_${currentCourse}`);
    const progressData = savedProgress ? JSON.parse(savedProgress) : { completed: [] };
    
    // Calculate percentage based on completed chapters
    const course = courses.find(c => c.id === currentCourse);
    if (course) {
      const totalSubchapters = course.chapters.reduce(
        (total, chapter) => total + chapter.subchapters.length, 0
      );
      const completedCount = progressData.completed.length;
      setProgress(Math.round((completedCount / totalSubchapters) * 100));
    }
  }, [currentCourse, currentChapter, currentSubchapter]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Voortgang</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
