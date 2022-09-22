import i18next from 'i18next';
import React, { Component } from 'react';

class M_hats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderMale = (keyId) => {
        switch (keyId) {
            case 0:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path
                                d="M103.52 79.13c-.16.03-.32.07-.48.1-.01 0-.03.01-.04.01-.49.1-1 .21-1.53.31-.02 0-.03.01-.05.01l-.48.09c-.02 0-.04.01-.06.01-.54.1-1.09.2-1.67.3-.02 0-.05.01-.07.01l-.52.09c-.02 0-.04.01-.05.01-.39.07-.8.13-1.2.2h-.02l-.58.09c-.02 0-.05.01-.07.01-.19.03-.39.06-.59.09h-.02c-.42.06-.86.12-1.29.18-.01 0-.03 0-.04.01-.2.03-.41.05-.61.08-.02 0-.04.01-.06.01-.66.09-1.34.17-2.03.25h-.05c-.22.02-.44.05-.66.07h-.04c-.71.08-1.43.15-2.16.21h-.04c-.98.09-1.99.16-3.01.22h-.02c-9.58.59-20.95.07-32.42-3.21V64.73c0-12.59 10.2-22.79 22.79-22.79h4.3c12.59 0 22.79 10.2 22.79 22.79v14.4h-.02z"
                                opacity={0.1}
                                fill="#00a6dd"
                            />
                            <path
                                d="M106.84 78.35c0 2.17-12.65 3.93-28.26 3.93s-28.26-1.76-28.26-3.93c0-.54.78-1.05 2.18-1.52V65.18c0-13.14 10.65-23.79 23.79-23.79h4.49c13.14 0 23.79 10.65 23.79 23.79v11.63c1.46.47 2.27 1 2.27 1.54zm-4.1-12.57c0-12.21-9.9-22.11-22.11-22.11h-4.18c-12.21 0-22.11 9.9-22.11 22.11v10.56c.2-.05.4-.09.6-.13-.23.08-.43.15-.6.23v1.28c2.62 1.2 12.47 2.1 24.23 2.1 11.67 0 21.47-.88 24.17-2.07v-1.33c-.17-.08-.38-.15-.61-.23.21.04.41.09.61.13V65.78z"
                                fill="#beefff"
                            />
                            <path
                                d="M104.35 78.93c-1.12 1.12-7.57 1.65-10.3 1.87-2.73.22-3.26-.86-1.16-.94 2.1-.07 8.08-.47 9.44-1.12.93-.45 3.14-.94 2.02.19zm-6.4-8.31c-1.09 0-1.97-.88-1.97-1.97 0-1.09.88-1.97 1.97-1.97 1.09 0 1.97.88 1.97 1.97.01 1.08-.88 1.97-1.97 1.97zm-.16-5.5c-.6-.09-2.65.53-2.65-4.87 0-5.54-5.55-7.95-8.03-8.55-2.57-.62-4.02-1.2-3.93-2.65.09-1.45.85-2.65 6.07-1.45 5.21 1.2 9.91 8.33 10.25 11.02.76 6.01-1.11 6.58-1.71 6.5z"
                                opacity={0.5}
                                fill="#fff"
                            />
                        </g>
                    </g>
                );

            case 1:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path fill="#000" d="M95.41 76.6c-1.66-.21-3.32-.48-4.96-.79-1.92-.37-3.83-.77-5.74-1.14-.99-.14-1.97-.29-2.95-.48-1.5.62-3.12.85-4.75.91-1.89.06-3.86-.14-5.72.2-2.12.39-3.94 1.64-6.08 1.95-2.1.31-4.27.19-6.4.16-.39.35-.82.66-1.27.95 4.43 3.57 12.08 5.93 20.77 5.93 8.97 0 16.82-2.51 21.18-6.27-.35-.36-.7-.74-1.03-1.12-1.03-.12-2.04-.17-3.05-.3z" />
                        <path
                            d="M99.52 73.8v5.31C94 76.28 86.61 74.55 78.5 74.55c-8.12 0-15.51 1.73-21.02 4.56V73.8c0-10.15 7.19-18.62 16.76-20.59 1.26-.26 2.56-.41 3.89-.43.12 0 .24-.01.37-.01 5.8 0 11.06 2.35 14.87 6.16 3.8 3.81 6.15 9.07 6.15 14.87z"
                            fill="#adc211"
                        />
                        <path fill="#000" d="M58.03 79.99c-.35 0-.69-.18-.87-.51a1 1 0 01.38-1.36c.33-.19 8.31-4.57 21.35-4.57 13.06 0 20.3 4.35 20.6 4.54.47.29.62.9.33 1.37-.29.47-.9.62-1.37.33-.07-.04-7.11-4.24-19.56-4.24-12.52 0-20.29 4.27-20.37 4.31-.15.09-.32.13-.49.13zM79.65 53.07c-.02 0-.04 0-.06-.01-.93-.15-2.19-.02-2.2-.02a.403.403 0 01-.44-.36c-.02-.22.14-.42.36-.44.06-.01 1.38-.14 2.41.03.22.04.37.24.33.46a.4.4 0 01-.4.34z" />
                        <g opacity={0.3}>
                            <path fill="#000" d="M77.34 53.18l-.07-.19c.18-.07.28-.1.28-.1l.06.19s-.1.03-.27.1zM75.14 54.19l-.09-.18c.19-.1.37-.19.54-.28l.09.18c-.17.09-.35.18-.54.28zm1.09-.54l-.08-.18c.21-.1.39-.18.56-.25l.08.18c-.18.07-.36.16-.56.25zM63.55 75.17c-.02-.2-.03-.41-.05-.61l.2-.01c.01.2.03.4.05.6l-.2.02zm-.08-1.22c-.01-.21-.01-.41-.02-.61h.2c0 .2.01.4.02.6l-.2.01zm.18-1.22h-.2c0-.21 0-.41.01-.61l.2.01c-.01.2-.01.4-.01.6zm.03-1.21l-.2-.01c.01-.2.03-.41.04-.61l.2.02c-.01.2-.02.4-.04.6zm.1-1.2l-.2-.02c.02-.2.05-.41.08-.61l.2.03c-.03.2-.05.4-.08.6zm.17-1.2l-.2-.03c.03-.2.07-.4.11-.6l.2.04c-.04.19-.08.39-.11.59zm.24-1.18L64 67.9c.05-.2.09-.4.14-.59l.19.05c-.05.18-.1.38-.14.58zm.3-1.17l-.19-.06c.06-.2.12-.39.18-.58l.19.06c-.06.19-.12.38-.18.58zm.37-1.15l-.19-.07c.07-.19.14-.38.22-.57l.19.07c-.08.19-.15.38-.22.57zm.45-1.12l-.18-.08c.08-.19.17-.37.25-.56l.18.08c-.09.19-.17.37-.25.56zm.51-1.1l-.18-.09c.09-.18.19-.36.29-.54l.17.1c-.09.17-.18.35-.28.53zm.59-1.06l-.17-.1c.1-.18.21-.35.32-.52l.17.11c-.11.17-.22.34-.32.51zm.64-1.02l-.17-.11c.11-.17.23-.34.35-.5l.16.12c-.11.16-.22.32-.34.49zm.71-.98l-.16-.12c.12-.16.25-.32.38-.48l.15.13c-.12.15-.24.31-.37.47zm.77-.93l-.15-.13c.13-.15.27-.31.41-.46l.15.14c-.15.14-.28.29-.41.45zm.81-.89l-.14-.14c.14-.15.29-.29.43-.43l.14.14-.43.43zm.87-.85l-.14-.15c.15-.14.3-.28.45-.41l.13.15c-.14.14-.29.27-.44.41zm.91-.79l-.12-.16c.16-.13.32-.26.48-.38l.12.16c-.16.12-.32.25-.48.38zm.96-.75l-.12-.16c.17-.12.33-.24.49-.36l.11.16-.48.36zm.99-.7l-.11-.17c.17-.12.34-.23.51-.33l.11.17-.51.33zm1.02-.64l-.1-.17c.18-.11.36-.21.53-.31l.1.17c-.18.1-.35.2-.53.31zM63.64 76.08l-.03-.3.2-.02.03.3-.2.02z" />
                        </g>
                        <g opacity={0.3}>
                            <path fill="#000" d="M80.09 53.18c-.18-.07-.28-.1-.28-.1l.06-.19s.1.03.28.1l-.06.19zM82.29 54.19c-.19-.1-.37-.19-.54-.28l.09-.18c.17.09.35.18.54.28l-.09.18zm-1.09-.54c-.2-.09-.39-.18-.55-.25l.08-.18c.17.07.35.15.56.25l-.09.18zM93.88 75.17l-.2-.02c.02-.2.03-.4.05-.6l.2.01c-.02.2-.03.4-.05.61zm.08-1.22l-.2-.01c.01-.2.01-.41.02-.6h.2c-.01.2-.01.41-.02.61zm-.18-1.22c0-.2 0-.41-.01-.6l.2-.01c.01.2.01.4.01.61h-.2zm-.04-1.21c-.01-.2-.03-.4-.04-.6l.2-.02c.02.2.03.4.04.61l-.2.01zm-.1-1.2c-.02-.2-.05-.4-.07-.6l.2-.03c.03.2.05.4.08.61l-.21.02zm-.16-1.2c-.03-.2-.07-.4-.11-.59l.2-.04c.04.2.08.4.11.6l-.2.03zm-.24-1.18c-.05-.2-.09-.39-.14-.59l.19-.05c.05.2.1.39.14.59l-.19.05zm-.3-1.17l-.18-.58.19-.06.18.58-.19.06zm-.38-1.15l-.21-.57.19-.07c.07.19.15.38.22.57l-.2.07zm-.44-1.12a9.19 9.19 0 00-.25-.55l.18-.08c.09.18.17.37.25.56l-.18.07zm-.52-1.1c-.09-.18-.19-.36-.28-.53l.17-.1c.1.18.19.36.29.54l-.18.09zm-.58-1.06c-.1-.17-.21-.35-.32-.52l.17-.11c.11.17.21.34.32.52l-.17.11zm-.64-1.02c-.11-.17-.23-.33-.35-.5l.16-.12c.12.16.23.33.35.5l-.16.12zm-.71-.98a8.66 8.66 0 00-.38-.47l.15-.13c.13.16.25.32.38.48l-.15.12zm-.77-.93c-.13-.15-.27-.3-.4-.45l.15-.14c.14.15.27.3.41.46l-.16.13zm-.82-.89c-.14-.15-.28-.29-.43-.43l.14-.14c.14.14.29.28.43.43l-.14.14zm-.86-.85c-.15-.14-.3-.27-.45-.4l.13-.15c.15.13.3.27.45.41l-.13.14zm-.91-.79c-.16-.13-.31-.26-.47-.38l.12-.16c.16.12.32.25.48.38l-.13.16zm-.96-.75c-.16-.12-.33-.24-.49-.35l.11-.16c.16.12.33.23.49.36l-.11.15zm-.99-.7l-.51-.33.11-.17.51.33-.11.17zm-1.02-.64c-.18-.11-.35-.21-.52-.3l.1-.17c.17.1.35.2.53.31l-.11.16zM93.79 76.08l-.2-.02.03-.3.2.02-.03.3z" />
                        </g>
                        <g opacity={0.3}>
                            <path fill="#000" d="M78.158 52.986l.2-.009.013.3-.2.009zM78.26 55.63l-.02-.59.2-.01.02.59-.2.01zm-.04-1.17l-.02-.59.2-.01.02.59-.2.01zM78.59 73.25v-.59h.2v.59h-.2zm-.01-1.17v-.59h.2v.59h-.2zm0-1.18l-.01-.59h.2l.01.59h-.2zm-.02-1.17l-.01-.59h.2l.01.59h-.2zm-.01-1.18l-.01-.59h.2l.01.59h-.2zm-.02-1.17l-.01-.59h.2l.01.59h-.2zm-.01-1.18l-.01-.59h.2l.01.59h-.2zm-.02-1.17l-.01-.59h.2l.01.59h-.2zm-.02-1.18l-.01-.59h.2l.01.59h-.2zm-.03-1.17l-.01-.59h.2l.01.59h-.2zm-.02-1.18l-.01-.59h.2l.01.59h-.2zm-.03-1.17l-.01-.59.2-.01.01.59-.2.01zm-.03-1.18l-.02-.59.2-.01.02.59-.2.01zm-.03-1.17l-.02-.59.2-.01.02.59-.2.01zm-.04-1.18l-.02-.59.2-.01.02.59-.2.01zM78.6 73.841h.2l.002.3h-.2z" />
                        </g>
                    </g>
                );
            case 2:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            fill="#000"
                            d="M95.2 67.26s-.51-20.34.25-23.01c.76-2.67-11.66-3.94-18.5-3.56s-16.48 1.14-16.86 4.7c-.37 3.47 2.99 19 2.81 25.44 0 .17-.01.34-.02.49-.38 6.1 15.72 6.48 20.41 6.23-.01.01 14.06.01 11.91-10.29z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                        <path
                            fill="#000"
                            d="M77.67 79.23c3.42-.11 22.12-.69 23.55-7.02 1.43-6.34-2.87-6.4-8.38-.86-5.51 5.54-26.56 3.22-28.37 2.09-1.8-1.13-4.9-6.98-7.59-5.78-2.68 1.2.28 6.51 5.04 8.34 4.78 1.84 12.32 3.34 15.75 3.23z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                        <path
                            fill="#000"
                            d="M57.5 68.18s-1.45 2.96 1.07 4.86c8.42 6.37 26.4 7.77 37.07 2.17 3.42-1.8 6.47-5.93 2.8-7.02 0 0 2.96-2.02 3.2 1.89.27 4.51-6.19 12.72-29.16 10.94-22.89-1.77-17.89-14.39-14.98-12.84z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                        <path
                            d="M62.46 69.82v2.24c0 .75.47 1.41 1.18 1.65 2.42.83 8.37 2.53 15.96 2.19 7.33-.32 12.18-1.85 15.56-4.67.51-.42.78-1.07.73-1.73l-.12-1.64a.423.423 0 00-.56-.37c-2.08.71-10.02 3.28-16.52 3.73-6.59.45-13.9-1.27-15.77-1.75a.365.365 0 00-.46.35z"
                            fill="#bde2ed"
                        />
                    </g>
                );
            case 3:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M101.67 72.28v5.56c0 .61-.26 1.16-.67 1.55a2.092 2.092 0 01-1.44.57H57.57c-.22 0-.44-.04-.64-.1a2.136 2.136 0 01-1.48-2.03v-5.56c0-.61.26-1.16.67-1.55.23-.21.5-.38.81-.47.2-.06.41-.1.63-.1h41.99c.22 0 .44.04.64.1.3.1.58.26.8.47.42.4.68.95.68 1.56z"
                            fill="#93d2e5"
                        />
                        <path
                            d="M99.35 68.11c0 .7-.04 1.39-.12 2.06H57.9c-.07-.67-.12-1.36-.12-2.06 0-4.81 1.95-9.16 5.1-12.31 3.15-3.16 7.5-5.11 12.31-5.11h6.76c9.61.01 17.4 7.8 17.4 17.42z"
                            fill="#93d2e5"
                        />
                        <path
                            fill="#000"
                            d="M99.34 68.64c-.02.52-.05 1.03-.11 1.53H57.9c-.06-.5-.09-1-.11-1.52h41.55z"
                            opacity={0.05}
                        />
                        <path
                            d="M83.93 49.46c0 2.97-2.4 2.32-5.37 2.32s-5.37.65-5.37-2.32c0-2.97 2.4-5.37 5.37-5.37s5.37 2.4 5.37 5.37z"
                            fill="#69c2db"
                        />
                        <g opacity={0.1}>
                            <path fill="#000" d="M100.99 70.73v8.66c-.23.21-.5.38-.8.47v-9.6c.3.1.58.26.8.47zM98.5 70.16h.81v9.8h-.81zM96.8 70.16h.81v9.8h-.81zM95.11 70.16h.81v9.8h-.81zM93.41 70.16h.81v9.8h-.81zM91.72 70.16h.8v9.8h-.8zM90.02 70.16h.81v9.8h-.81zM88.33 70.16h.81v9.8h-.81zM86.63 70.16h.81v9.8h-.81zM84.94 70.16h.81v9.8h-.81zM83.24 70.16h.8v9.8h-.8zM81.55 70.16h.81v9.8h-.81zM79.85 70.16h.81v9.8h-.81zM78.16 70.16h.81v9.8h-.81zM76.46 70.16h.81v9.8h-.81zM74.77 70.16h.8v9.8h-.8zM73.07 70.16h.81v9.8h-.81zM71.38 70.16h.81v9.8h-.81zM69.69 70.16h.81v9.8h-.81zM67.99 70.16h.81v9.8h-.81zM66.3 70.16h.8v9.8h-.8zM64.6 70.16h.81v9.8h-.81zM62.91 70.16h.81v9.8h-.81zM61.21 70.16h.81v9.8h-.81zM59.52 70.16h.81v9.8h-.81zM57.82 70.16h.8v9.8h-.8zM56.93 70.26v9.6c-.3-.1-.58-.26-.81-.48v-8.65c.23-.21.51-.37.81-.47z" />
                        </g>
                    </g>
                );
            case 4:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M109.85 77.87s-2.76.03-5.83-.06h-.13l-.95-.03c-.14-.01-.28-.01-.41-.02-.32-.01-.64-.03-.96-.05-.38-.02-.76-.04-1.12-.07-.41-.03-.81-.06-1.19-.1v-2.36c0-.63-.03-1.25-.08-1.86-.02-.27-.05-.54-.09-.81 2.92.32 8.59 1.47 10.76 5.36z"
                            fill="#514277"
                        />
                        <path
                            d="M104.02 77.8h-.13l-.95-.03c-.14-.01-.28-.01-.41-.02-.32-.01-.64-.03-.96-.05-.38-.02-.76-.04-1.12-.07-.41-.03-.81-.06-1.19-.1v-2.36c0-.63-.03-1.25-.08-1.86.8.48 1.6.94 2.35 1.5.35.38.71.76 1.05 1.15.48.6.97 1.21 1.44 1.84z"
                            opacity={0.2}
                        />
                        <path
                            d="M104.88 86.64s-1.62-1.25-3.56-2.87a.138.138 0 00-.04-.03c-.66-.55-1.35-1.14-2.04-1.73v-6.79c.6.56 1.45 1.42 2.31 2.48 1.9 2.33 3.87 5.64 3.33 8.94z"
                            fill="#715c9b"
                        />
                        <path
                            d="M101.31 83.77a.138.138 0 00-.04-.03c-.66-.55-1.35-1.14-2.04-1.73v-6.69c.54.68.92 1.46 1.19 2.3.39 1.22.57 2.55.69 3.81.04.46.08.9.12 1.33.03.18-.01.92.08 1.01z"
                            opacity={0.2}
                        />
                        <path
                            d="M99.25 74.76v3.72H57.11v-3.72c0-5.02 1.76-9.64 4.7-13.26.19-.24.39-.47.6-.7.15-.18.31-.35.48-.52l.06-.06c.42-.45.87-.87 1.33-1.28 1.46-1.29 3.11-2.38 4.9-3.23 2.46-1.16 5.17-1.86 8.03-1.99h.05c.17-.01.34-.01.51-.02.14 0 .28-.01.42-.01.13 0 .27 0 .4.01a19.422 19.422 0 011.53.09l.3.03a20.823 20.823 0 019.04 3.15c.65.41 1.27.85 1.86 1.34.11.09.23.18.34.27.49.41.96.84 1.41 1.29 3.82 3.81 6.18 9.08 6.18 14.89z"
                            fill="#7b6aa5"
                        />
                    </g>
                );
            case 5:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M98.96 71.52v5.2H58.21v-5.2c0-9.84 6.97-18.05 16.24-19.96 1.22-.25 2.48-.39 3.77-.41.12 0 .24-.01.36-.01 5.63 0 10.72 2.28 14.41 5.97 3.69 3.69 5.97 8.79 5.97 14.41z"
                            fill="#f1c100"
                        />
                        <path
                            d="M78.23 51.15v22.89h-3.77V51.57c1.22-.26 2.48-.4 3.77-.42z"
                            opacity={0.15}
                            fill="#020202"
                        />
                        <path
                            d="M78.84 51.15v22.89h3.77V51.57c-1.22-.26-2.48-.4-3.77-.42z"
                            opacity={0.12}
                            fill="#fff"
                        />
                        <path
                            d="M82.04 73.64c0 .47-.38.86-.86.86h-5.19a.86.86 0 01-.86-.86v-22.6c0-.47.38-.86.86-.86h5.19c.47 0 .86.38.86.86v22.6z"
                            fill="#e5aa15"
                        />
                        <path
                            d="M101.28 75.55c0 1.09-.88 1.97-1.97 1.97H57.87c-1.09 0-1.97-.88-1.97-1.97 0-1.09.88-1.97 1.97-1.97H99.3c1.09 0 1.98.88 1.98 1.97z"
                            fill="#d69a12"
                        />
                    </g>
                );

        }
    }

    render() {
        if (this.props.type == 'button') {
            return (
                <div className={`vectorBtn ${this.props.locked ? 'locked' : ''}`} style={{ backgroundColor: '#F9F9F9', width: 100, marginHorizontal: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderColor: this.props.selected ? '#6AC3DB' : '#E5E5E5', borderWidth: this.props.selected ? 3 : 1 }}
                    onClick={() => {

                        this.props.OnItemSelected();

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
                    {this.props.locked &&
                        <div className="itempoints">
                            {this.props.points} {i18next.t('levelsMap.points')}
                        </div>
                    }
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

export default M_hats;