import React, { Component } from 'react';

class M_face extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("lockedItem",props.locked)
    }


    renderMale = (keyId) => {
        switch (keyId) {
            case 0:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >

                    </g>
                );
            case 1:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path
                                d="M93.97 104.91c-5.01.03-8.77-3.41-10.87-10.9-1.38-4.95-3.91-5.28-4.56-5.28v.01s-.03 0-.08-.01c-.05 0-.08.01-.08.01v-.01c-.65.01-3.17.37-4.49 5.34-2 7.51-5.72 11-10.73 11.04-11.85.08-10.96-12.65-8.75-17.54 2.21-4.89 15.26-3 16.44-2.74 1.19.26 3.93.23 5.4.22.36 0 1.92.01 2.18.01.26-.01 1.82-.04 2.18-.04 1.47-.01 4.21-.01 5.4-.29 1.18-.27 14.21-2.33 16.48 2.53 2.27 4.85 3.32 17.57-8.52 17.65z"
                                fill="#ffa729"
                            />
                            <path
                                d="M94.02 105.74c-5.01 0-8.75-3.47-10.8-10.97-1.35-4.96-3.88-5.3-4.52-5.31v.01s-.03 0-.08-.01c-.05 0-.08.01-.08.01v-.01c-.65 0-3.17.35-4.52 5.31-2.05 7.5-5.79 10.97-10.8 10.97-11.85 0-10.88-12.72-8.64-17.59 2.24-4.87 15.28-2.9 16.46-2.63 1.19.26 3.93.25 5.4.25.36 0 1.92.02 2.18.03.26 0 1.82-.03 2.18-.03 1.47 0 4.21.01 5.4-.25 1.19-.26 14.22-2.24 16.46 2.63s3.21 17.59-8.64 17.59zM56.85 88.66c-2.46 2.78-2.34 7.39-2.02 8.72.32 1.33 2.02 5.94 6.82 6.57 2.83.37 8.69.11 10.93-10.11 2.02-9.21-13.27-7.96-15.73-5.18zm43.47 0c-2.46-2.78-17.75-4.03-15.73 5.18 2.24 10.21 8.1 10.48 10.93 10.11 4.8-.63 6.51-5.24 6.82-6.57.31-1.33.44-5.94-2.02-8.72z"
                                fill="#ff9000"
                            />
                            <path
                                d="M102.34 97.37c-.32 1.33-2.02 5.94-6.82 6.57-2.83.37-8.69.11-10.93-10.11-2.02-9.21 13.27-7.96 15.73-5.18 2.46 2.79 2.33 7.4 2.02 8.72zm-40.69 6.57c-4.8-.63-6.51-5.24-6.82-6.57-.32-1.33-.44-5.94 2.02-8.72 2.46-2.78 17.75-4.03 15.73 5.18-2.24 10.22-8.1 10.49-10.93 10.11z"
                                fill="#863f00"
                            />
                            <path
                                d="M65.79 103.16c-.65.21-1.29.33-1.89.38-.08 0-.16.01-.24.01l3.89-16.57c.54.11 1.05.25 1.54.43l-3.3 15.75zm-2.42.4h-.38l3.97-16.69c.1.02.2.03.3.05l-3.89 16.64zm1.02-16.88l-1.95 6.46-.35-.85-2.75 10.47c-.12-.06-.24-.12-.36-.19l2.93-11.31.56.91 1.6-5.49h.32zm24.31 14.88l5.5-14.83c.13.01.25.01.37.02.41.04.81.08 1.2.14l.07.03-6.34 15.26a6.94 6.94 0 01-.8-.62zm10.03-7.68l-5.27 9.66c-.29-.02-.6-.06-.91-.12-.13-.03-.27-.07-.42-.11l-.8-.32 4.7-8.6-1-.4 3.67-6.36c.22.08.42.17.61.27.35.19.64.38.88.57l-2.63 4.49 1.17.92z"
                                fill="#d89500"
                            />
                            <path
                                d="M84.71 93.35c2.24 10.21 8.1 10.48 10.93 10.11 4.46-.59 6.25-4.61 6.73-6.24-.01.06-.02.11-.03.16-.32 1.33-2.02 5.94-6.82 6.57-2.83.37-8.69.11-10.93-10.11-.27-1.21-.23-2.24.03-3.11-.14.76-.13 1.62.09 2.62zm-29.76 3.53c.32 1.33 2.02 5.94 6.82 6.57 2.73.36 8.29.12 10.69-9.1-2.32 9.7-8.03 9.96-10.81 9.59-4.8-.63-6.51-5.24-6.82-6.57-.2-.86-.33-3.1.28-5.33-.47 2.07-.35 4.05-.16 4.84z"
                                fill="#ffa729"
                            />
                            <path
                                d="M100.42 89.68c-2.28-2.43-15.57-3.62-15.9 3.13-1.66-8.41 13.34-7.23 15.78-4.64 1.67 1.78 2.15 4.35 2.19 6.22-.24-1.59-.82-3.38-2.07-4.71zm-4.93 12.93c4.8-.6 6.51-4.95 6.82-6.2.1-.4.18-1.13.17-2.02.22 1.54.11 2.9-.04 3.52-.32 1.25-2.02 5.61-6.82 6.2-2.83.35-8.69.1-10.93-9.54-.15-.64-.2-1.22-.17-1.76.02.08.03.17.05.26 2.24 9.64 8.09 9.89 10.92 9.54zm-22.81-8.04c-2.24 9.64-8.1 9.89-10.93 9.54-4.8-.6-6.51-4.95-6.82-6.2-.09-.36-.16-.97-.17-1.72.01.08.03.15.05.21.32 1.25 2.02 5.61 6.82 6.2 2.83.35 8.69.1 10.93-9.54.09-.4.15-.78.17-1.14.18.76.18 1.64-.05 2.65zm-15.73-4.89c-1.76 1.88-2.2 4.64-2.19 6.51-.28-1.47-.27-5.53 2.07-8.02 2.35-2.5 16.37-3.69 15.9 3.75-1.41-5.75-13.6-4.56-15.78-2.24z"
                                opacity={0.2}
                                fill="#863f00"
                            />
                        </g>
                    </g>
                );
            case 2:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path
                                d="M95.88 97.02l.81 6.5-5.93-2.78-5.93 2.78.81-6.5-4.48-4.78L87.6 91l3.16-5.74L93.93 91l6.43 1.24-4.48 4.78zm-23.58 6.51l-5.91-2.77-5.91 2.77.81-6.48-4.47-4.77 6.42-1.23 3.15-5.72 3.15 5.72 6.42 1.23-4.47 4.77.81 6.48z"
                                fill="#420033"
                            />
                            <path
                                d="M93.15 93.73l1.33.33-6.24 9.17-1.55-.5 5.91-7.79-1.21-.28 3.26-4.69h1.22l-2.72 3.76zm-1.91 1.8l-7.26 7.65.23-3.12 3.62-3.42-2.03-.74 6.85-8.15 1.66 1.71-5.27 5.21 2.2.86zm-21.77-3.72l-3.42 10.55-1.62-.04 3.49-9.13-1.24.08 1.81-5.42 1.17-.34-1.54 4.36 1.35-.06zm-2.74 2.12l-6.17 11.3-.56-.12 6.05-10.78-1.75-.2 4.27-8.29.13.6-3.55 7.26 1.58.23z"
                                fill="#660051"
                            />
                            <path
                                d="M99.45 92.85l-5.53-.78-3.16-5.33-3.16 5.33-5.51.78-.91-.97 6.43-1.24 3.16-5.74 3.16 5.74 6.43 1.24-.91.97zm-29.92-.62l-3.15-5.32-3.15 5.32-5.48.67-.92-.98 6.42-1.23 3.15-5.72 3.15 5.72 6.42 1.23-.92.99-5.52-.68zm-8.33 5.15l.07.07-.77 5.71-.03.01.73-5.79zm10.28.07l.1-.1.73 5.82-.06-.03-.77-5.69zm14.08-.1l.07.07-.77 5.72-.03.01.73-5.8zm10.31.07l.1-.1.73 5.83-.06-.03-.77-5.7z"
                                opacity={0.2}
                            />
                            <path
                                d="M97.73 97.75l1.11 8.89-8.12-3.81-8.12 3.81 1.11-8.89-5.18-5.54-5.18 5.54 1.11 8.89-8.12-3.81-8.12 3.81 1.11-8.89-6.13-6.54 8.8-1.69 4.33-7.85 4.33 7.85 7.86 1.51 7.86-1.51 4.33-7.85 4.33 7.85 8.8 1.69-6.11 6.54zm-28.3-6.9l-3.08-5.59-3.08 5.59L57 92.06l4.36 4.66-.79 6.33 5.78-2.71 5.78 2.71-.79-6.33 4.36-4.66-6.27-1.21zm24.37 0l-3.08-5.59-3.08 5.59-6.27 1.2 4.36 4.66-.79 6.33 5.78-2.71 5.78 2.71-.79-6.33 4.36-4.66-6.27-1.2z"
                                fill="#e20cb2"
                            />
                            <path
                                d="M97.78 97.99l1.11 8.89-8.12-3.81-8.12 3.81 1.11-8.89L81 95.04c-1.88-1.73-3.81-.79-4.59-.27l-3.01 3.22 1.11 8.89-8.12-3.81-8.12 3.81 1.11-8.89-6.13-6.54 8.8-1.69 4.33-7.85 4.33 7.85 7.86 1.51 7.86-1.51 4.33-7.85 4.33 7.85 8.8 1.69-6.11 6.54zm-28.3-6.89l-3.08-5.59-3.08 5.59-6.27 1.2 4.36 4.66-.79 6.33 5.78-2.71 5.78 2.71-.79-6.33 4.36-4.66-6.27-1.2zm24.38 0l-3.08-5.59-3.08 5.59-6.27 1.2 4.36 4.66-.79 6.33 5.78-2.71 5.78 2.71-.79-6.33 4.36-4.66-6.27-1.2z"
                                fill="#b4008c"
                            />
                            <path
                                d="M96.11 91.53l-.95-.2.6-1.51 1.43.2-1.08 1.51zm-23.39.16l.6-1.51 1.43.2-1.09 1.51-.94-.2z"
                                opacity={0.3}
                                fill="#fff"
                            />
                        </g>
                    </g>
                );
            case 3:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path fill="#000" d="M109.72 88.75c-.1 1.62-.97 2.9-.97 2.9-.64 4.83-2.63 15.72-12.93 15.47s-11.94-4.77-12.93-6.77c-.99-2-2.31-6.05-2.91-7.73-.41-1.16-1.62-.97-1.62-.97v-.09c-.39.03-1.01.2-1.29.98-.6 1.7-1.92 5.77-2.9 7.78-.99 2.01-2.62 6.56-12.9 6.8-10.28.25-12.26-10.7-12.9-15.55 0 0-.87-1.28-.97-2.92-.1-1.63-1.33-3.73 2.58-4.54 3.91-.8 13.85-2.58 20.64-.32 6.8 2.26 7.64 1.96 8.06 1.94v.13c.63.02 2.23-.13 7.76-1.95 6.81-2.24 16.76-.48 20.68.32 3.94.8 2.7 2.89 2.6 4.52zm-40.46-2.14c-2.31-.57-13.16-3.38-15.92 2.27-2.92 6 .16 15.1 7.15 15.57 2.85.19 9.15.69 12.02-7.79 2.87-8.48-.94-9.49-3.25-10.05zm34.27 2.36c-2.74-5.64-13.51-2.83-15.81-2.27-2.29.57-6.08 1.57-3.23 10.04 2.85 8.47 9.1 7.97 11.94 7.78 6.95-.46 10-9.56 7.1-15.55z" />
                            <path
                                d="M108.09 88.13h-.97c-.27 0-.48-.22-.48-.49s.22-.49.48-.49h.97c.27 0 .48.22.48.49s-.21.49-.48.49zm-58.71 0c-.27 0-.48-.22-.48-.49s.22-.49.48-.49h.97c.27 0 .48.22.48.49s-.22.49-.48.49h-.97z"
                                fill="#d11392"
                            />
                        </g>
                    </g>
                );
            case 4:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            fill="#000"
                            d="M108.99 88.94c-.12 1.16.15 2.82-1.15 3.05-1.29.24-1.15.76-1.15.76-.95 3.25.14 9.26-5.35 11.84-5.48 2.58-14.65.38-17.19-.76-2.54-1.15-3.12-8-3.82-10.69-.31-1.19-1.04-1.51-1.59-1.57-.56-.01-1.49.2-1.85 1.59-.7 2.7-1.29 9.58-3.84 10.73-2.55 1.15-11.76 3.35-17.27.77-5.51-2.59-4.42-8.62-5.37-11.88 0 0 .15-.53-1.15-.77-1.3-.24-1.03-1.9-1.15-3.06-.12-1.17-.26-2.73 1.92-3.06s7.07-2.1 14.58-1.92c7.44.19 9.21 1.98 14.44 1.91 4.56-.13 6.52-1.73 13.5-1.9 7.47-.19 12.35 1.57 14.51 1.91 2.19.33 2.05 1.89 1.93 3.05zm-45.13-1.91c-2.75-.22-9.71-.71-9.59 5.75.12 6.45.78 8.56 3.84 9.96 3.06 1.4 10.8-.01 13.05-1.15 2.24-1.14 2.14-6.66 2.3-8.43.63-6.72-6.85-5.91-9.6-6.13zm29.56.13c-2.74.22-10.21-.59-9.57 6.15.17 1.77.06 7.31 2.3 8.45 2.24 1.15 9.97 2.56 13.02 1.15 3.05-1.41 3.71-3.52 3.83-9.99.12-6.47-6.84-5.98-9.58-5.76z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                        <path
                            d="M105.23 88.59c-.32 0-.58.26-.58.57s.26.57.58.57.58-.26.58-.57-.26-.57-.58-.57zm1.92 0c-.32 0-.58.26-.58.57s.26.57.58.57.58-.26.58-.57-.27-.57-.58-.57zm-57.17 0c-.32 0-.58.26-.58.57s.26.57.58.57c.32 0 .58-.26.58-.57s-.26-.57-.58-.57zm1.92 0c-.32 0-.58.26-.58.57s.26.57.58.57.58-.26.58-.57-.27-.57-.58-.57z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#fca203"
                        />
                    </g>
                );
            case 5:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path fill="#000" d="M109.08 82.73H81.25V89h-5.37v-6.27H48.05v4.84h3.17v9.07c0 5.76 4.67 10.44 10.44 10.44h3.79c5.76 0 10.44-4.67 10.44-10.44v-4.3h5.37v4.3c0 5.76 4.68 10.44 10.44 10.44h3.79c5.77 0 10.44-4.67 10.44-10.44v-9.07h3.17v-4.84zM72.75 97.79a6.21 6.21 0 01-6.21 6.21h-5.99a6.21 6.21 0 01-6.21-6.21v-11.8c0-.11 0-.21.01-.32h18.39c.01.11.01.21.01.32v11.8zm30.04 0a6.21 6.21 0 01-6.21 6.21h-5.99a6.21 6.21 0 01-6.21-6.21v-11.8c0-.11 0-.21.01-.32h18.39c.01.11.01.21.01.32v11.8z" />
                        <path
                            fill="#fff"
                            d="M107.03 84.18h.79v.62h-.79zM107.03 85.36h.79v.62h-.79zM49.3 84.18h.79v.62h-.79zM49.3 85.36h.79v.62h-.79z"
                        />
                        <g fill="#fff">
                            <path
                                fill="#fff"
                                d="M102.8 85.99v11.8a6.137 6.137 0 01-1.36 3.87c-.18.22-.37.43-.58.63-.8.76-1.8 1.31-2.91 1.56-.44.1-.9.15-1.37.15H90.6a6.21 6.21 0 01-6.21-6.21v-11.8c0-.11 0-.21.01-.32h18.4v.32zM72.7 85.99v11.8a6.21 6.21 0 01-5.74 6.19c-.16.01-.31.02-.47.02H60.5a6.21 6.21 0 01-6.21-6.21v-11.8c0-.11 0-.21.01-.32h18.39c0 .1.01.21.01.32z"
                                opacity={0.4}
                            />
                        </g>
                    </g>
                );
            case 6:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path fill="#000" d="M106.17 94.02h-1.73c-.45-5.82-5.33-10.43-11.27-10.43-5.24 0-9.65 3.58-10.93 8.41a4.765 4.765 0 00-3.62-1.67c-1.47 0-2.78.67-3.65 1.71-1.27-4.86-5.69-8.45-10.94-8.45-5.94 0-10.82 4.6-11.27 10.43h-1.8c-.49 0-.88.4-.88.88 0 .49.4.88.88.88h1.8c.45 5.82 5.33 10.43 11.27 10.43 6.24 0 11.31-5.07 11.31-11.31 0-.21-.01-.41-.02-.61.36-1.49 1.71-2.6 3.3-2.6 1.55 0 2.86 1.04 3.27 2.46-.02.25-.03.5-.03.75 0 6.24 5.07 11.31 11.31 11.31 5.94 0 10.82-4.6 11.27-10.43h1.73c.49 0 .88-.4.88-.88a.875.875 0 00-.88-.88zm-42.15 10.43c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54 0 5.26-4.28 9.54-9.54 9.54zm29.15 0c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54 0 5.26-4.28 9.54-9.54 9.54z" />
                        <path
                            d="M102.7 94.91c0 2.7-1.13 5.15-2.94 6.88-.47.46-.99.86-1.55 1.21a9.46 9.46 0 01-5.05 1.45c-5.26 0-9.54-4.28-9.54-9.54 0-1.85.53-3.58 1.45-5.05.35-.56.75-1.08 1.21-1.55a9.525 9.525 0 016.89-2.94c5.25-.01 9.53 4.27 9.53 9.54zM73.48 94.91c0 1.16-.21 2.27-.59 3.29-.12.33-.26.66-.42.97-.13.26-.27.51-.42.75-.33.54-.72 1.05-1.16 1.51a9.493 9.493 0 01-6.96 3.02c-5.26 0-9.54-4.28-9.54-9.54a9.51 9.51 0 013.02-6.96 9.463 9.463 0 012.26-1.58c.31-.16.64-.3.97-.42a9.51 9.51 0 013.3-.59c5.26 0 9.54 4.28 9.54 9.55z"
                            opacity={0.4}
                            fill="#fff"
                        />
                    </g>
                );
            case 7:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M101.74 100.53c0 1.33-1.08 2.41-2.41 2.41H85.47c-1.33 0-2.41-1.08-2.41-2.41V88.42c0-1.33 1.08-2.41 2.41-2.41h13.86c1.33 0 2.41 1.08 2.41 2.41v12.11zM73.99 100.53c0 1.33-1.08 2.41-2.41 2.41H57.71c-1.33 0-2.41-1.08-2.41-2.41V88.42c0-1.33 1.08-2.41 2.41-2.41h13.86c1.33 0 2.41 1.08 2.41 2.41v12.11z"
                            opacity={0.4}
                            fill="#fff"
                        />
                        <path
                            d="M73.99 101.38c0 1.33-1.08 2.41-2.41 2.41H57.72c-1.33 0-2.41-1.08-2.41-2.41V89.27c0-1.33 1.08-2.41 2.41-2.41h13.86c1.33 0 2.41 1.08 2.41 2.41v12.11zm27.74 0c0 1.33-1.08 2.41-2.41 2.41H85.46c-1.33 0-2.41-1.08-2.41-2.41V89.27c0-1.33 1.08-2.41 2.41-2.41h13.86c1.33 0 2.41 1.08 2.41 2.41v12.11zm2.15-9.19v-2.92c0-2.51-2.04-4.55-4.55-4.55H85.46c-2.51 0-4.55 2.04-4.55 4.55v.6c-1.98-.53-3.65-.33-4.78-.02v-.58c0-2.51-2.04-4.55-4.55-4.55H57.72c-2.51 0-4.55 2.04-4.55 4.55v2.92h-2.62v2.38h2.62v6.81c0 2.51 2.04 4.55 4.55 4.55h13.86c2.51 0 4.55-2.04 4.55-4.55v-9.29c.82-.32 2.55-.75 4.78.02v9.27c0 2.51 2.04 4.55 4.55 4.55h13.87c2.51 0 4.55-2.04 4.55-4.55v-6.81h2.82v-2.38h-2.82z"
                            opacity={0.3}
                            fill="#282828"
                        />
                        <path fill="#000" d="M108.05 91.35h-4.17v-2.92c0-2.51-2.04-4.55-4.55-4.55H85.46c-2.51 0-4.55 2.04-4.55 4.55v.6c-1.98-.53-3.64-.33-4.78-.02v-.58c0-2.51-2.04-4.55-4.55-4.55H57.72c-2.51 0-4.55 2.04-4.55 4.55v2.92h-4.09c-.15 0-.27.12-.27.27v1.84c0 .15.12.27.27.27h4.09v6.81c0 2.51 2.04 4.55 4.55 4.55h13.86c2.51 0 4.55-2.04 4.55-4.55v-9.29c.82-.32 2.55-.75 4.78.02v9.27c0 2.51 2.04 4.55 4.55 4.55h13.86c2.51 0 4.55-2.04 4.55-4.55v-6.81h4.17c.15 0 .27-.12.27-.27v-1.84a.255.255 0 00-.26-.27zm-34.06 9.19c0 1.33-1.08 2.41-2.41 2.41H57.72c-1.33 0-2.41-1.08-2.41-2.41V88.43c0-1.33 1.08-2.41 2.41-2.41h13.86c1.33 0 2.41 1.08 2.41 2.41v12.11zm27.74 0c0 1.33-1.08 2.41-2.41 2.41H85.46c-1.33 0-2.41-1.08-2.41-2.41V88.43c0-1.33 1.08-2.41 2.41-2.41h13.86c1.33 0 2.41 1.08 2.41 2.41v12.11z" />

                    </g>
                );
        }
    }


    render() {
        console.log("buttonType",this.props.type,this.props.locked)
        if (this.props.type == 'button') {
            return (
                <div className={`vectorBtn ${this.props.locked ? 'locked' : ''}`} style={{ backgroundColor: '#F9F9F9', width: 100, marginHorizontal: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderColor: this.props.selected ? '#6AC3DB' : '#E5E5E5', borderWidth: this.props.selected ? 3 : 1 }}
                    onClick={() => {
                        //if (!this.props.locked) {
                            this.props.OnItemSelected();
                        //}

                    }}>

                    {
                        this.props.locked
                            ?
                            <img
                                src={'../../../../assets/images/lockIcon.png'}
                                width="35"
                                style={{
                                    position: 'absolute',
                                    top: -1,
                                    right: 0
                                }}
                            />
                            : null
                    }
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: 100, width: 100, }}>

                        <g transform={`scale(${this.props.z})`}>
                            {
                                this.renderMale(this.props.targetId)
                            }
                        </g>
                    </svg>
                </div>
            );
        } else {
            return (
                
                <g>
                    {
                        this.renderMale(this.props.targetId)
                    }
                </g>
            );
        }

    }
}

export default M_face;