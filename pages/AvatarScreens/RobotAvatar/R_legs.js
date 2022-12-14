import React, { Component } from 'react';

class R_legs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    //activeSkinColor
    //activeBodyPartsSkinColor
    //activeHeadSkinColor

    renderMale = (keyId) => {
        switch (keyId) {
            case 0:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M94.42 202.24c0 1.07.89 1.94 1.98 1.94 1.09 0 1.98-.87 1.98-1.94V160c0-1.07-.89-1.94-1.98-1.94-1.09 0-1.98.87-1.98 1.94v42.24z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M80.64 200.13c-1.09.01-1.97.93-1.96 2.07.01 1.14.9 2.05 1.99 2.04l15.73-.12c1.09-.01 1.97-.94 1.96-2.07-.01-1.14-.9-2.05-1.99-2.04l-15.73.12z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                        <g fill={'' + this.props.activeSkinColor}>
                            <path d="M93.38 204.25c0 .58-.47 1.05-1.06 1.05-.58 0-1.05-.47-1.05-1.05v-4.39c0-.58.47-1.06 1.05-1.06.58 0 1.06.47 1.06 1.06v4.39zM80.61 204.25c0 .58-.47 1.05-1.06 1.05-.58 0-1.06-.47-1.06-1.05v-4.39a1.06 1.06 0 012.12 0v4.39z" />
                        </g>
                        <path
                            d="M92.13 205.85c.02 1.9-.93 3.45-2.12 3.47l-7.94.09c-1.2.01-2.18-1.52-2.21-3.42l-.09-7.9c-.02-1.9.93-3.45 2.12-3.47l7.94-.09c1.2-.01 2.18 1.52 2.21 3.42l.09 7.9z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                        <g fill={'' + this.props.activeSkinColor}>
                            <path d="M81.429 194.648l.44-.005.175 14.748-.44.005zM85.569 194.598l.44-.005.175 14.748-.44.005zM89.709 194.558l.44-.005.175 14.748-.44.005z" />
                        </g>
                        <g>
                            <path
                                d="M62.41 202.24c0 1.07-.89 1.94-1.98 1.94-1.09 0-1.98-.87-1.98-1.94V160c0-1.07.89-1.94 1.98-1.94 1.09 0 1.98.87 1.98 1.94v42.24z"
                                fill={'' + this.props.activeSkinColor}
                            />
                            <path
                                d="M76.19 200.13c1.09.01 1.97.93 1.96 2.07-.01 1.14-.9 2.05-1.99 2.04l-15.73-.12c-1.09-.01-1.97-.94-1.96-2.07.01-1.14.9-2.05 1.99-2.04l15.73.12z"
                                fill={'' + this.props.activeBodyPartsSkinColor}
                            />
                            <g fill={'' + this.props.activeSkinColor}>
                                <path d="M63.45 204.25c0 .58.47 1.05 1.06 1.05.58 0 1.06-.47 1.06-1.05v-4.39a1.06 1.06 0 00-2.12 0v4.39zM76.22 204.25c0 .58.47 1.05 1.06 1.05.58 0 1.05-.47 1.05-1.05v-4.39c0-.58-.47-1.06-1.05-1.06-.58 0-1.06.47-1.06 1.06v4.39z" />
                            </g>
                            <path
                                d="M64.7 205.85c-.02 1.9.93 3.45 2.12 3.47l7.94.09c1.2.01 2.18-1.52 2.21-3.42l.09-7.9c.02-1.9-.93-3.45-2.12-3.47l-7.94-.09c-1.2-.01-2.18 1.52-2.21 3.42l-.09 7.9z"
                                fill={'' + this.props.activeBodyPartsSkinColor}
                            />
                            <g fill={'' + this.props.activeSkinColor}>
                                <path d="M74.77 209.397l.173-14.748.44.005-.173 14.748zM70.629 209.353l.172-14.749.44.005-.172 14.749zM66.498 209.298l.172-14.748.44.005-.172 14.749z" />
                            </g>
                        </g>
                    </g>
                );

            case 1:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M70.76 201.22v-4.57l-12.8.16v4.41c1.81-1.1 4-1.75 6.37-1.76 2.39.01 4.61.65 6.43 1.76zM70.76 163.12h-12.8v22.52l12.8-.16z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M56.14 190.56h16.45c.13 0 .24.05.33.14.26-.41.42-1.09.42-1.86l-.01-1.12c-.02-1.25-.49-2.26-1.05-2.25l-1.5.02-12.8.16-1.64.02c-.56.01-1.01 1.03-.99 2.28l.01 1.12c.01.71.17 1.33.4 1.74.06-.15.21-.25.38-.25zM72.4 196.64c.56-.01 1.01-1.03.99-2.28l-.01-1.12c-.01-.79-.2-1.49-.49-1.89-.08.07-.19.12-.31.12H56.14c-.07 0-.13-.02-.19-.04-.34.37-.56 1.14-.55 2.04l.01 1.12c.02 1.25.49 2.26 1.05 2.25l1.5-.02 12.8-.16 1.64-.02zM70.76 201.22c-1.83-1.11-4.04-1.76-6.44-1.75-2.37.01-4.56.66-6.37 1.76-2.95 1.8-4.88 4.79-4.87 8.18l22.53-.08c.01-3.36-1.92-6.33-4.85-8.11z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                        <path
                            d="M72.59 191.47c.12 0 .23-.05.31-.12a.446.446 0 00.02-.65.477.477 0 00-.33-.14H56.14c-.17 0-.32.1-.4.24-.04.06-.06.14-.06.21 0 .18.11.34.27.41.06.03.12.04.19.04h16.45zM98.87 163.12h-12.8v22.52l12.8-.16zM92.43 199.47c2.39-.01 4.61.64 6.44 1.75v-4.57l-12.8.16v4.41c1.8-1.09 4-1.74 6.36-1.75z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M84.24 190.56h16.45c.13 0 .24.05.32.14.26-.41.42-1.09.41-1.86l-.01-1.12c-.02-1.25-.49-2.26-1.05-2.25l-1.5.02-12.8.16-1.64.02c-.56.01-1.01 1.03-.99 2.28l.01 1.12c.01.71.17 1.33.4 1.74.08-.15.23-.25.4-.25zM100.51 196.64c.56-.01 1.01-1.03.99-2.28l-.01-1.12c-.01-.79-.2-1.49-.49-1.89-.08.07-.19.12-.31.12H84.24c-.07 0-.13-.02-.19-.04-.34.37-.56 1.14-.55 2.04l.01 1.12c.02 1.25.49 2.26 1.05 2.25l1.5-.02 12.8-.16 1.65-.02zM86.07 201.23c-2.95 1.8-4.88 4.79-4.86 8.18l22.53-.08c-.01-3.37-1.94-6.33-4.86-8.11-1.83-1.11-4.04-1.76-6.44-1.75-2.37.01-4.57.66-6.37 1.76z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                        <path
                            d="M100.69 191.47c.12 0 .23-.05.31-.12a.446.446 0 00.02-.65.472.472 0 00-.32-.14H84.24c-.17 0-.32.1-.4.24-.04.06-.06.14-.06.21 0 .18.11.34.27.41.06.03.12.04.19.04h16.45z"
                            fill={'' + this.props.activeSkinColor}
                        />
                    </g>
                );
            case 2:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path fill={'' + this.props.activeSkinColor} d="M69.59 160.97h17.64v28.4H69.59z" />
                        <g fill={'' + this.props.activeSkinColor}>
                            <path d="M69.64 170.97h17.6v.44h-17.6zM69.64 179.12h17.6v.44h-17.6zM69.64 187.28h17.6v.44h-17.6z" />
                        </g>
                        <g fill={'' + this.props.activeSkinColor}>
                            <path d="M69.64 154.65h17.6v.44h-17.6zM69.64 162.81h17.6v.44h-17.6zM69.64 170.97h17.6v.44h-17.6z" />
                        </g>
                        <path
                            d="M112.42 204.1c0 2.93-2.38 5.31-5.31 5.31H49.72c-2.93 0-5.31-2.38-5.31-5.31v-9.71c0-2.93 2.38-5.31 5.31-5.31h57.38c2.93 0 5.31 2.38 5.31 5.31v9.71z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                        <path
                            d="M60.75 199.91c0 3.3-2.68 5.98-5.98 5.98-3.3 0-5.98-2.68-5.98-5.98 0-3.31 2.68-5.98 5.98-5.98 3.3-.01 5.98 2.67 5.98 5.98z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M57.76 199.91c0 1.65-1.34 2.99-2.99 2.99-1.65 0-2.99-1.34-2.99-2.99s1.34-2.99 2.99-2.99a2.979 2.979 0 012.99 2.99z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M108.06 199.91c0 3.3-2.68 5.98-5.98 5.98-3.3 0-5.98-2.68-5.98-5.98 0-3.31 2.68-5.98 5.98-5.98 3.3-.01 5.98 2.67 5.98 5.98z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M105.07 199.91c0 1.65-1.34 2.99-2.99 2.99-1.65 0-2.99-1.34-2.99-2.99s1.34-2.99 2.99-2.99a2.979 2.979 0 012.99 2.99z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M76.43 199.91c0 3.3-2.68 5.98-5.98 5.98s-5.98-2.68-5.98-5.98c0-3.31 2.68-5.98 5.98-5.98s5.98 2.67 5.98 5.98z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M73.44 199.91c0 1.65-1.34 2.99-2.99 2.99-1.65 0-2.99-1.34-2.99-2.99 0-1.65 1.34-2.99 2.99-2.99a2.979 2.979 0 012.99 2.99z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M92.38 199.91c0 3.3-2.68 5.98-5.98 5.98s-5.98-2.68-5.98-5.98c0-3.31 2.68-5.98 5.98-5.98s5.98 2.67 5.98 5.98z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M89.39 199.91c0 1.65-1.34 2.99-2.99 2.99s-2.99-1.34-2.99-2.99c0-1.65 1.34-2.99 2.99-2.99s2.99 1.33 2.99 2.99z"
                            fill={'' + this.props.activeSkinColor}
                        />
                    </g>
                );
            case 3:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fill={'' + this.props.activeBodyPartsSkinColor}>
                            <path d="M70.88 196.05c0 .01-1.44-.59-1.53-.64-1.31-.78-2.32-1.98-3.07-3.29-2.29-4.02-2.5-8.86-2.35-13.37.05-1.44.56-17.69.28-17.69h-4.3v18.09s-1.77 16.76 11.19 21.8c.01.01-.22-4.9-.22-4.9zM85.95 196.05c0 .01 1.44-.59 1.53-.64 1.31-.78 2.32-1.98 3.07-3.29 2.29-4.02 2.5-8.86 2.35-13.37-.05-1.44-.56-17.69-.28-17.69h4.3v18.09s1.77 16.76-11.19 21.8c-.01.01.22-4.9.22-4.9z" />
                        </g>
                        <path
                            d="M89.08 199.06c0 .22.21.39.46.39s.46-.18.45-.4l-.07-6c0-.22-.21-.4-.46-.39-.25 0-.46.18-.45.4l.07 6zM67.69 199.05c0 .22-.2.4-.45.4s-.46-.17-.46-.39l-.07-6c0-.22.2-.4.45-.4s.46.17.46.39l.07 6z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M89.4 203.09c.04 3.38-1.65 6.13-3.77 6.16l-14.11.17c-2.12.03-3.88-2.69-3.92-6.07l-.17-14.04c-.04-3.38 1.65-6.13 3.77-6.16l14.11-.17c2.12-.03 3.88 2.69 3.92 6.07l.17 14.04z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <g fill={'' + this.props.activeSkinColor}>
                            <path d="M70.582 183.188l.44-.005.312 26.197-.44.006zM77.932 183.098l.44-.005.312 26.197-.44.005zM85.282 183.018l.44-.005.311 26.197-.44.006z" />
                        </g>
                    </g>
                );
            case 4:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M61.77 183.28c-.75-.33-1.76-.79-2.61-.7-1.63.17-1.97 2.08-.92 2.93.84.68 1.9 1.09 2.97 1.24 1.44.2 3-.13 4.18-.95-.91-1.13-2.21-1.9-3.62-2.52zM61.4 191.96c-.67-.16-1.5-.16-1.83.58-.73 1.64.99 2.58 2.42 2.13.5-.16 1-.39 1.47-.67-.09-1-.86-1.75-2.06-2.04zM98.01 170.93c1.26-.27 4.62-1.11 2.27-2.63-1.94-1.25-4.54-1.07-6.68-.45-1.55.45-3.52 1.19-4.87 2.4 2.92 1.35 6.04 1.38 9.28.68zM68.08 170.31c-2-1.67-4.73-2.77-7.35-2.89-1.06-.05-2.18-.05-3.18.35-.46.19-2.56 1.22-1.74 1.97 1.92 1.76 6.76 2.05 9.21 1.57.86-.17 2-.49 3.1-.96l-.04-.04zM63.84 175.8c-1.06-.46-3.22-1.31-4.19-.23-1.06 1.18-1.57 2.85.64 3.49.52.15 1.04.27 1.58.27 1.38 0 3.04-.48 4.49-1.28-.57-.97-1.4-1.76-2.52-2.25zM96.92 194.43c.88-.9.51-2.76-1-2.56-1.19.16-2.54.95-2.63 2.15 1.25.89 2.67 1.39 3.63.41zM97.51 178.63c1.43-.9.63-3.01-.92-3.27-.77-.13-1.54-.11-2.3.1-1.19.33-2.63.82-3.43 1.83-.2.25-.39.54-.55.85 2.1 1.1 5.04 1.85 7.2.49zM98 185.94c.98-.64 2.28-3.47-.33-3.36-.62.03-1.2.13-1.78.36-.93.36-1.83.8-2.68 1.32-.68.41-1.28.95-1.76 1.56 1.88 1.24 4.63 1.37 6.55.12z"
                            fill="none"
                        />
                        <path fill="#000" d="M63.63 196.74c.28-.76.7-1.56.87-2.17 2.48-1.71 3.67-4.85 2.64-7.81-.1-.28-.24-.56-.4-.84.36-.37.68-.78.94-1.26.98-1.79.88-4.11.05-6.07 1.94-1.3 3.32-3.33 2.97-5.8-.12-.85-.47-1.59-.97-2.25 2.65-1.66 4.23-4.49 1.4-7.02-1.91-1.71-4.49-2.41-7-2.42-.64 0-.64 1 0 1 2.47 0 8.43 1.47 7.52 5.03-.29 1.15-1.31 2.05-2.52 2.72-1.77-1.74-4.62-2.75-6.7-3.19-2.36-.51-6.82-.49-7.76 2.42-.72 2.2 3.91 2.85 5.09 3.03 3.18.49 6.01.38 8.96-1 .04-.02.07-.04.11-.05 2.14 2.42.72 4.88-1.63 6.48-.52-.85-1.18-1.59-1.96-2.1-2.17-1.43-7.24-2.37-7.5 1.6-.26 3.88 5.19 3.5 7.59 2.73.53-.17 1.05-.39 1.54-.65.43 1.19.54 2.54.34 3.85-.13.85-.5 1.57-1.03 2.15-1.73-2.14-5.04-3.73-7.46-3.48-1.15.12-2.1 1.31-2.09 2.45.01 1.6 1.12 2.51 2.5 3.12 2.2.97 4.87.76 6.79-.58.22.41.4.85.53 1.34.52 2.08-.45 4.02-1.99 5.32-.32-1.03-1.28-1.63-2.35-2.11-1.8-.81-3.71.15-3.71 2.2 0 2.59 2.92 2.67 4.68 1.96.05-.02.11-.05.16-.07-.18.49-.41.99-.6 1.49.21-.01.43-.01.65-.01.13-.01.24-.01.34-.01zm-7.83-27c-.81-.75 1.29-1.78 1.74-1.97 1-.41 2.13-.4 3.18-.35 2.61.12 5.35 1.23 7.35 2.89.01.01.02.02.04.03-1.1.48-2.24.79-3.1.96-2.45.5-7.29.21-9.21-1.56zm6.07 9.58c-.54 0-1.07-.12-1.58-.27-2.21-.64-1.7-2.31-.64-3.49.97-1.07 3.14-.23 4.19.23 1.12.49 1.95 1.28 2.53 2.24-1.46.81-3.12 1.29-4.5 1.29zm-.66 7.43c-1.07-.15-2.13-.55-2.97-1.24-1.04-.85-.7-2.76.92-2.93.85-.09 1.86.37 2.61.7 1.41.62 2.71 1.39 3.62 2.53-1.18.81-2.74 1.14-4.18.94zm.78 7.92c-1.43.46-3.15-.49-2.42-2.13.33-.74 1.16-.75 1.83-.58 1.2.29 1.97 1.03 2.06 2.04-.47.29-.96.51-1.47.67z" />
                        <path
                            d="M63.63 196.74c-.11 0-.21-.01-.32-.01-.22 0-.43 0-.65.01-5.92.24-10.63 4.13-10.65 8.91-.02 4.95 22.51 5.04 22.53.09.02-4.86-4.84-8.84-10.91-9z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path fill="#000" d="M94.19 196.75c-.17-.47-.37-.93-.57-1.4 1.12.51 2.34.65 3.5.14 1.54-.69 1.71-3.15.42-4.13-1.47-1.12-4.7 0-5.22 1.85-.69-.65-1.24-1.35-1.5-1.82-.88-1.61-.7-3.34.1-4.78.49.35 1.05.65 1.69.87 2.1.72 7.56.19 7.58-2.97.03-4.26-4.58-2.69-6.87-1.45a8.732 8.732 0 00-2.62 2.15c-1.39-1.45-1.49-4.05-.81-6.08 1.91 1.02 4.21 1.48 6.09 1.09 1.17-.24 3.27-.94 3.57-2.33.32-1.47-.87-2.91-2.27-3.36-1.62-.51-3.46-.18-4.97.56-1.38.68-2.19 1.46-2.78 2.59-1.96-1.31-3.11-3.48-2.06-5.81.13-.28.28-.54.47-.79 1.38.7 2.91 1.12 4.22 1.25 2.75.29 6.09-.11 8.61-1.24 2.47-1.1 1.08-3.15-.71-4.08-3.22-1.66-9.22-.21-12.23 2.77-.23-.13-.46-.27-.69-.42-5.52-3.61 1.81-7.28 5.54-7.29.64 0 .64-1 0-1-2.73 0-9.62 1.84-8.59 5.88.39 1.54 1.57 2.76 3.02 3.65-1.25 1.67-1.57 3.7-.19 5.89.52.82 1.29 1.55 2.18 2.14-.07.19-.13.38-.2.58-.79 2.51-.36 5.03 1.26 6.71-.98 1.59-1.28 3.51-.41 5.48.51 1.15 1.49 2.37 2.68 3.23.21.63.54 1.38.76 2.08.1 0 .21-.01.31-.01.24.03.47.04.69.05zm-.59-28.89c2.14-.62 4.74-.81 6.68.45 2.35 1.52-1.02 2.35-2.27 2.63-3.25.71-6.37.68-9.28-.68 1.36-1.21 3.32-1.95 4.87-2.4zm-2.75 9.43c.8-1 2.24-1.5 3.43-1.83.76-.21 1.53-.23 2.3-.1 1.55.26 2.35 2.38.92 3.27-2.16 1.35-5.09.61-7.2-.49.17-.31.35-.6.55-.85zm2.36 6.97c.86-.51 1.75-.96 2.68-1.32.58-.22 1.16-.33 1.78-.36 2.61-.11 1.31 2.72.33 3.36-1.92 1.25-4.67 1.11-6.55-.13.48-.61 1.08-1.14 1.76-1.55zm2.71 7.6c1.51-.2 1.87 1.66 1 2.56-.96.99-2.38.49-3.62-.41.07-1.19 1.43-1.99 2.62-2.15z" />
                        <path
                            d="M94.19 196.75c-.22-.01-.45-.02-.68-.01-.11 0-.21 0-.31.01-6.07.16-10.93 4.14-10.91 9 .02 4.95 22.55 4.86 22.53-.09-.02-4.78-4.72-8.66-10.63-8.91z"
                            fill={'' + this.props.activeSkinColor}
                        />
                    </g>
                );
            case 5:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M72.52 159.7l-7.51 11.7c1.34.89 2.22 2.4 2.22 4.1 0 2.74-2.25 4.95-5.04 4.95-.95 0-1.83-.26-2.58-.71-2.97 3.63-5.71 9.81-5.87 20.28.47-.04.95-.07 1.43-.07 6.24-.01 11.37 3.73 11.96 8.52.05.3.08.6.1.92v-33.14l9.04-14.49-3.75-2.06z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M55.17 199.95c-.48 0-.96.03-1.43.07-5.96.56-10.58 4.55-10.57 9.39l24.02-.02c0-.31-.02-.62-.06-.92-.59-4.79-5.72-8.52-11.96-8.52zM67.23 175.5c0-1.71-.88-3.21-2.22-4.1a5.04 5.04 0 00-2.82-.85c-2.78 0-5.04 2.22-5.04 4.95 0 1.81.98 3.38 2.45 4.25.76.45 1.64.71 2.58.71 2.8-.01 5.05-2.23 5.05-4.96z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                        <path
                            d="M101.66 199.95c.48 0 .96.03 1.43.07-.16-10.47-2.9-16.65-5.87-20.28-.76.45-1.64.71-2.58.71-2.78 0-5.04-2.22-5.04-4.95 0-1.71.88-3.21 2.22-4.1l-7.51-11.7-3.75 2.06 9.04 14.49v33.14c.02-.32.06-.63.1-.92.59-4.79 5.72-8.52 11.96-8.52z"
                            fill={'' + this.props.activeSkinColor}
                        />
                        <path
                            d="M113.66 209.41c0-4.84-4.61-8.83-10.57-9.39-.47-.04-.95-.07-1.43-.07-6.24-.01-11.37 3.73-11.96 8.52-.04.3-.06.61-.06.92l24.02.02zM89.6 175.5c0 2.74 2.25 4.95 5.04 4.95.95 0 1.83-.26 2.58-.71 1.47-.87 2.45-2.44 2.45-4.25 0-2.74-2.25-4.95-5.04-4.95-1.05 0-2.02.31-2.82.85-1.33.89-2.21 2.4-2.21 4.11z"
                            fill={'' + this.props.activeBodyPartsSkinColor}
                        />
                    </g>
                );

        }
    }

    renderFemale = (keyId) => {
        switch (keyId) {
            case 0:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M97.03 150.29l-6.57-.65-2.3.08-.62.02-5.5.2-.57.02-3.55.13-.61.02-5.4.19-.77.03-11.04.2s-5.78 9.81-13.44 30.27c1.68 1.95 4.05 3.61 6.89 5 .18.09.34.18.52.26 3.89 1.82 8.63 3.14 13.7 3.95l.57.09c5.6.85 11.58 1.07 17.29.66.19-.01.38-.02.57-.04 5.9-.47 11.47-1.62 15.98-3.47.18-.07.35-.15.53-.23 3.37-1.45 6.12-3.3 7.88-5.57-7.09-19.05-13.56-31.16-13.56-31.16z"
                            fill="#c74ce5"
                        />
                        <g fill="#6b477c">
                            <path d="M67.75 149.9c-3.7 4.46-8.02 16.74-13.58 36.16.18.09.34.18.52.26 5.71-20 10.36-32.36 13.83-36.45l-.77.03zM75.03 149.97c-2.4 6.94-5.2 23.14-7.28 40.03l.57.09c2.09-17.01 4.97-33.34 7.33-40.14l-.62.02zM82.04 149.93l-.57.02c1.01 7.94 3.15 25.73 4.14 40.8.19-.01.38-.02.57-.04-.99-15.05-3.13-32.8-4.14-40.78zM90.52 149.36l-.62.02c3.2 7.31 7.47 23.33 12.25 37.86.18-.07.35-.15.53-.23-4.74-14.4-8.93-30.25-12.16-37.65z" />
                        </g>
                        <path
                            d="M96.86 146.6h-8.19l-28.29.02-.15.92s-.28 2.78-.14 2.97c.14.19 10.16 1.01 19.62 1.13 5.9.08 17.23-1.2 17.32-1.37.18-.29-.17-3.67-.17-3.67z"
                            fill="#6b477c"
                        />
                    </g>
                );
            case 1:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fill="#8fb5c8">
                            <path d="M96.72 149.88s-7.22.95-18.18.95v13.15s2.19.21 2.43 4.13 2.84 28.64 2.84 28.64h5.88c.01.01 7.03-23.27 7.03-46.87z" />
                            <path d="M60.48 149.88s7.22.95 18.18.95v13.15s-2.19.21-2.43 4.13-2.84 28.64-2.84 28.64h-5.88c0 .01-7.03-23.27-7.03-46.87z" />
                        </g>
                        <circle
                            transform="rotate(-9.265 69.47 179.44)"
                            cx={69.46}
                            cy={179.41}
                            fill="#a8d4e5"
                            r={2.72}
                        />
                        <path
                            d="M90.88 179.41c0-1.5-1.22-2.72-2.72-2.72-1.5 0-2.72 1.22-2.72 2.72 0 1.5 1.22 2.72 2.72 2.72a2.73 2.73 0 002.72-2.72z"
                            fill="#a8d4e5"
                        />
                    </g>
                );
            case 2:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M76.71 174.21c.28-2.86.48-5.13.54-6.1.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98.27 3.24.54 6.1h16.12c.9-8.93.09-15.82.09-24.33 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51-.93 14.49.09 24.33h16.12z"
                            fill="#f0471c"
                        />
                        <path
                            d="M68.12 150.52s-.9 4.45-3.19 6.24-4.64 1.41-4.64 1.41l-.03.89s3.43.05 5.72-2.24c2.29-2.29 2.89-6.24 2.89-6.24l-.75-.06zM78.84 164.05l-.46.01v-13.23h.46z"
                            fill="#c6442a"
                        />
                        <g fill="#f4745b">
                            <path d="M60.35 171.34c.07.93.14 1.88.25 2.88h16.12c.1-1.05.19-2.02.27-2.88H60.35zM80.27 171.34c.08.86.17 1.83.27 2.88h16.12c.1-.98.17-1.94.23-2.88H80.27z" />
                        </g>
                        <path
                            d="M89.11 150.52s.9 4.45 3.19 6.24 4.64 1.41 4.64 1.41l.03.89s-3.43.05-5.72-2.24c-2.29-2.29-2.89-6.24-2.89-6.24l.75-.06z"
                            fill="#c6442a"
                        />
                    </g>
                );
            case 3:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M76.71 174.21c.28-2.86.48-5.13.54-6.1.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98.27 3.24.54 6.1h16.12c.9-8.93.09-15.82.09-24.33 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51-.93 14.49.09 24.33h16.12z"
                            fill="#6085ba"
                        />
                        <path
                            d="M68.12 150.52s-.9 4.45-3.19 6.24-4.64 1.41-4.64 1.41l-.03.89s3.43.05 5.72-2.24c2.29-2.29 2.89-6.24 2.89-6.24l-.75-.06zM78.84 164.05l-.46.01v-13.23h.46z"
                            fill="#4470a5"
                        />
                        <g fill="#769ece">
                            <path d="M60.35 171.34c.07.93.14 1.88.25 2.88h16.12c.1-1.05.19-2.02.27-2.88H60.35zM80.27 171.34c.08.86.17 1.83.27 2.88h16.12c.1-.98.17-1.94.23-2.88H80.27z" />
                        </g>
                        <path
                            d="M89.11 150.52s.9 4.45 3.19 6.24 4.64 1.41 4.64 1.41l.03.89s-3.43.05-5.72-2.24c-2.29-2.29-2.89-6.24-2.89-6.24l.75-.06z"
                            fill="#4470a5"
                        />
                    </g>
                );
            case 4:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M76.71 174.21c.28-2.86.48-5.13.54-6.1.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98.27 3.24.54 6.1h16.12c.9-8.93.09-15.82.09-24.33 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51-.93 14.49.09 24.33h16.12z"
                            fill="#3c204f"
                        />
                    </g>
                );
            case 5:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M75.69 188.18c.28-2.86 1.48-19.09 1.54-20.06.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98 1.27 17.21 1.54 20.06h13.12c.9-8.93 2.09-29.78 2.09-38.29 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51 1.07 28.45 2.09 38.29h13.12z"
                            fill="#ff960b"
                        />
                        <path
                            d="M68.09 150.52s-.9 4.45-3.19 6.24-4.24 1.41-4.24 1.41l.04.87s2.96.07 5.25-2.22 2.89-6.24 2.89-6.24l-.75-.06zM78.81 164.05l-.45.01v-13.23h.45z"
                            fill="#ea8206"
                        />
                        <g fill="#ea8206">
                            <path d="M62.32 185.3c.07.93.14 1.88.25 2.88h13.12c.1-1.05.19-2.02.27-2.88H62.32zM81.24 185.3c.08.86.17 1.83.27 2.88h13.12c.1-.98.17-1.94.23-2.88H81.24z" />
                        </g>
                        <path
                            d="M89.08 150.52s.9 4.45 3.19 6.24 4.24 1.41 4.24 1.41l-.04.87s-2.96.07-5.25-2.22-2.89-6.24-2.89-6.24l.75-.06z"
                            fill="#ea8206"
                        />
                    </g>
                );
            case 6:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M75.69 183.18c.28-2.86 1.48-14.09 1.54-15.06.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98 1.27 12.21 1.54 15.06h13.12c.9-8.93 2.09-24.78 2.09-33.29 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51 1.07 23.45 2.09 33.29h13.12z"
                            fill="#a0bcca"
                        />
                        <path
                            d="M68.09 150.52s-.9 4.45-3.19 6.24-4.24 1.41-4.24 1.41l.04.87s2.96.07 5.25-2.22 2.89-6.24 2.89-6.24l-.75-.06zM78.81 164.05l-.45.01v-13.23h.45z"
                            fill="#7497ab"
                        />
                        <g fill="#fdd483">
                            <path d="M62.32 180.3c.07.93.14 1.88.25 2.88h13.12c.1-1.05.19-2.02.27-2.88H62.32zM81.24 180.3c.08.86.17 1.83.27 2.88h13.12c.1-.98.17-1.94.23-2.88H81.24z" />
                        </g>
                        <path
                            d="M89.08 150.52s.9 4.45 3.19 6.24 4.24 1.41 4.24 1.41l-.04.87s-2.96.07-5.25-2.22-2.89-6.24-2.89-6.24l.75-.06z"
                            fill="#7497ab"
                        />
                    </g>
                );
            case 7:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M75.69 183.18c.28-2.86 1.48-14.09 1.54-15.06.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98 1.27 12.21 1.54 15.06h13.12c.9-8.93 2.09-24.78 2.09-33.29 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51 1.07 23.45 2.09 33.29h13.12z"
                            fill="#d3d641"
                        />
                    </g>
                );
            case 8:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M76.71 174.21c.28-2.86.48-5.13.54-6.1.22-3.56 1.04-4.06 1.37-4.12.33.06 1.15.56 1.37 4.12.06.98.27 3.24.54 6.1h16.12c.9-8.93.09-15.82.09-24.33 0 0-7.2.95-18.12.95-10.92 0-18.12-.95-18.12-.95 0 8.51-.93 14.49.09 24.33h16.12z"
                            fill="#ba744d"
                        />
                    </g>
                );
            case 9:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M96.76 147.49l-36.3-.13s-3.63 13.66-4.5 29.49c13.55 6.68 30.38 4.91 39.35 2.05 2.99-.96 5.11-2.03 5.94-2.96-2.13-17.73-4.49-28.45-4.49-28.45z"
                            fill="#ff7b8e"
                        />
                        <defs>
                            <path
                                id="prefix__a"
                                d="M96.76 147.49l-36.3-.13s-3.63 13.66-4.5 29.49c13.55 6.68 30.38 4.91 39.35 2.05 2.99-.96 5.11-2.03 5.94-2.96-2.13-17.73-4.49-28.45-4.49-28.45z"
                            />
                        </defs>
                        <clippath id="prefix__b">
                            <use xlinkHref="#prefix__a" overflow="visible" />
                        </clippath>
                        <g clipPath="url(#prefix__b)" fill="#ffdede">
                            <circle cx={54.05} cy={173.84} r={1.36} />
                            <path d="M61.72 169.67c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3.76-.03 1.34-.66 1.3-1.42z" />
                            <circle cx={66.99} cy={164.04} r={1.36} />
                            <path d="M75.1 156.78c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3.75-.03 1.33-.66 1.3-1.42z" />
                            <circle cx={62.48} cy={156.41} r={1.36} />
                            <circle cx={57.28} cy={162.08} r={1.36} />
                            <path d="M66.88 177.28c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3.75-.03 1.33-.67 1.3-1.42z" />
                            <circle cx={72.35} cy={171.4} r={1.36} />
                            <circle cx={79.19} cy={164.39} r={1.36} />
                            <circle cx={67.68} cy={149.44} r={1.36} />
                            <path d="M66.65 142.47c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42s.67 1.33 1.42 1.3a1.37 1.37 0 001.3-1.42zM86.28 156.27c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3s1.33-.67 1.3-1.42zM80.38 149.36c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3.75-.03 1.33-.67 1.3-1.42z" />
                            <circle cx={74.49} cy={143.47} r={1.36} />
                            <circle cx={78.47} cy={178.3} r={1.36} />
                            <circle cx={84.92} cy={170.82} r={1.36} />
                            <circle cx={90.19} cy={163.3} r={1.36} />
                            <path d="M90.32 149.63c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3s1.33-.66 1.3-1.42zM86.31 143.07c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42s.67 1.33 1.42 1.3 1.33-.67 1.3-1.42zM94.97 143.83c-.03-.75-.67-1.33-1.42-1.3s-1.33.67-1.3 1.42c.03.75.67 1.33 1.42 1.3a1.35 1.35 0 001.3-1.42z" />
                            <circle cx={95} cy={154.92} r={1.36} />
                            <path d="M93.61 176.59c-.03-.75-.67-1.33-1.42-1.3-.75.03-1.33.67-1.3 1.42.03.75.67 1.33 1.42 1.3.75-.03 1.34-.67 1.3-1.42z" />
                            <circle cx={96.44} cy={168.93} r={1.36} />
                            <circle cx={103.3} cy={173.16} r={1.36} />
                            <path d="M101.15 158.73c-.69.1-1.21.69-1.18 1.39.03.75.67 1.33 1.42 1.3.21-.01.41-.08.58-.17l-.82-2.52zM58.82 150.88c.56-.19.97-.71.94-1.33-.01-.17-.05-.33-.12-.48l-.82 1.81z" />
                        </g>
                    </g>
                );
            case 10:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M96.87 147.6l-36.61-.24c-4.36 11.46-8.67 22.63-7.47 26.29.96 2.92 2.67 3.98 4.71 4.41.54.11 1.09.19 1.67.24 2.77.22 4 3.54 6.59 4.4 2.59.86 5.04-.28 7.13-.49 2.09-.21 3.94 2.12 7.8 1.87 3.85-.25 5.75-3.3 8.66-2.79 2.91.52 6.55.88 8.12-.67 1.35-1.33 2.18-3.36 4.86-3.48.18-.01.35-.03.53-.02 2.92.11 4.42-1.64 3.99-3.46-2.43-10.5-9.98-26.06-9.98-26.06z"
                            fill="#d32420"
                        />
                    </g>
                );
            case 11:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M72.78 177.23c-1.32.06-5.2.23-6.52.28-.24.01-.41.23-.37.46l.18 1c.03.18.19.32.38.32h6.21c.2 0 .37-.15.39-.35l.13-1.28a.392.392 0 00-.4-.43zM71.52 176.71c.21 0 .39-.17.39-.39v-.33a.4.4 0 00-.36-.39l-5.37-.36c-.2-.01-.38.13-.41.34l-.1.69c-.03.23.15.44.39.44h5.46z"
                            fill="none"
                        />
                        <path
                            d="M78.55 150.83v13.15s2.19.21 2.43 4.13c.24 3.92 2.84 28.64 2.84 28.64h5.88s7.03-23.28 7.03-46.87c-.01 0-7.23.95-18.18.95zm11.51 31.5c-.1-.13-.15-1.1-.28-.88s.03.67-.23.29c-.27-.38-.48-.57-.62.16s-.28 2.38-.58 1.43c-.3-.95-.34-2.37-.45-1.78s.03 1.58-.23.85c-.27-.73-.21-1.47-.31-.94s.07 1.15-.22.51c-.29-.64-.16-1.19-.37-.69s-.13 1.2-.33.57.02-1.1-.27-.59c-.29.51-.49.21-.51-.16-.02-.37-.13-1.12-.1-1.42.02-.3.2-.51.2-.51s-.2-.55.07-.79 1.71-.22 1.71-.22 1.98-.15 2.4-.14c.42.01.53.55.49.86-.05.31-.05.37-.05.37s.28.48.23.93c-.06.45-.45 2.28-.55 2.15zm2.76-10.98c-.12.26-.4 1.35-.57 1.29-.17-.06-.19-.96-.48-.96s-1.5-.43-1.63-.14-.18 1.35-.4 1.1-.28-1.37-.41-1.03c-.12.34-.17.68-.4.39-.23-.29-.59-.54-1.13-.47-.54.08-.6.57-.96.17-.36-.4-1.38-1.02-1.26-1.32s.12-.48-.01-.96c-.13-.47.26-1.25.37-1.8s-.22-1.68.36-2.07c.57-.39 3.12-.14 3.12-.14s3.9 0 4.12.73c.23.73-.13 1.13 0 1.27.13.14.38.84.32 1.29s-.3.76-.44.92-.47 1.47-.6 1.73z"
                            fill="#3080b2"
                        />
                        <path
                            d="M93.54 167.43c-.13-.14.23-.54 0-1.27s-4.12-.73-4.12-.73-2.55-.25-3.12.14c-.57.39-.25 1.52-.36 2.07s-.5 1.33-.37 1.8.13.66.01.96.9.92 1.26 1.32.42-.09.96-.17c.54-.08.9.17 1.13.47.23.29.28-.05.4-.39s.19.78.41 1.03.27-.81.4-1.1 1.33.14 1.63.14c.29 0 .31.9.48.96.17.06.45-1.02.57-1.29s.45-1.57.59-1.72.38-.47.44-.92-.17-1.16-.31-1.3zm-6.77-1.59c.03-.17.18-.29.36-.27l5.92.54c.17.02.3.16.3.33v.31c0 .18-.15.33-.33.33h-6.07c-.21 0-.36-.19-.33-.39l.15-.85zm6.06 4.43l-.27.7c-.05.13-.18.22-.33.21l-5.44-.31a.33.33 0 01-.31-.38l.02-.15c.02-.15.15-.27.31-.28.99-.05 4.4-.19 5.7-.24.24-.01.41.23.32.45zm.64-1.5c0 .18-.14.32-.31.33-1.42.08-7.23.4-7.21.33.02-.06.45-1.12.64-1.58.05-.13.18-.21.31-.21 1.01.02 5.07.11 6.25.14.18 0 .32.15.32.33v.66zM90.41 178.88c.05-.31-.07-.85-.49-.86-.42-.01-2.4.14-2.4.14s-1.44-.02-1.71.22-.07.79-.07.79-.17.21-.2.51c-.02.3.08 1.05.1 1.42.02.37.22.67.51.16.29-.51.07-.03.27.59.2.63.12-.07.33-.57.21-.5.08.05.37.69.29.64.12.01.22-.51s.05.21.31.94c.27.73.12-.26.23-.85s.15.83.45 1.78c.3.95.44-.7.58-1.43.14-.73.35-.55.62-.16.27.38.1-.07.23-.29s.19.76.28.88c.1.13.49-1.7.53-2.15.05-.45-.23-.93-.23-.93s.02-.06.07-.37zm-4.47-.19a.33.33 0 01.3-.24l3.48-.19c.19-.01.35.14.35.33v.19c0 .18-.15.33-.33.33h-3.48c-.22 0-.38-.21-.32-.42zm4.18 2.06a.32.32 0 01-.35.27c-.97-.09-3.94-.36-3.94-.42a5.43 5.43 0 010-.59c0-.18.15-.33.33-.33h3.77c.21 0 .36.19.32.39l-.13.68z"
                            fill="#93c6e5"
                        />
                        <path
                            d="M60.48 149.88c0 23.6 7.03 46.87 7.03 46.87h5.88s2.6-24.73 2.84-28.64c.24-3.91 2.43-4.13 2.43-4.13v-13.15c-10.95 0-18.18-.95-18.18-.95zm12.7 30.93c-.22.02-.14-.75-.43-.69-.29.05-.39.68-.84.93-.45.26-1.33.86-1.71.24-.38-.62-.75-1.48-1.13-1.35-.38.13-.33.89-.68.38-.35-.51-.55-1.04-.64-.66s.07 2.15-.26 1.77c-.33-.38-.64-1.84-.69-1.57-.06.27-.42.58-.57.2-.15-.38-.6-.38-.75-1.04s-.22-1.53-.22-1.79-.22-1.55.18-2.06 1.86-.24 1.86-.24 4.13.26 4.8.47c.68.22.58 1.39.58 1.39s1.02.47 1.04 1.06c.03.58-.32 2.94-.54 2.96z"
                            fill="#3080b2"
                        />
                        <path
                            d="M72.69 176.79s.09-1.17-.58-1.39c-.68-.22-4.8-.47-4.8-.47s-1.46-.27-1.86.24c-.4.51-.18 1.81-.18 2.06s.07 1.13.22 1.79.6.66.75 1.04c.15.38.51.07.57-.2.05-.27.36 1.19.69 1.57.33.38.16-1.39.26-1.77s.29.15.64.66c.35.51.29-.26.68-.38.38-.13.75.73 1.13 1.35.38.62 1.26.02 1.71-.24.45-.26.55-.88.84-.93.29-.05.22.71.43.69.22-.02.57-2.37.55-2.96-.03-.59-1.05-1.06-1.05-1.06zm-7.03-.52l.1-.69a.4.4 0 01.41-.34l5.37.36c.2.01.36.18.36.39v.33c0 .21-.17.39-.39.39h-5.47a.39.39 0 01-.38-.44zm7.39 2.67a.39.39 0 01-.39.35h-6.21c-.19 0-.35-.13-.38-.32l-.18-1c-.04-.23.13-.45.37-.46 1.32-.06 5.2-.23 6.52-.28.24-.01.43.19.4.43l-.13 1.28z"
                            fill="#93c6e5"
                        />
                    </g>
                );
            case 12:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fill="#4e87b5">
                            <path d="M96.72 149.88s-7.22.95-18.18.95v13.15s2.19.21 2.43 4.13 2.84 28.64 2.84 28.64h5.88c.01.01 7.03-23.27 7.03-46.87z" />
                            <path d="M60.48 149.88s7.22.95 18.18.95v13.15s-2.19.21-2.43 4.13-2.84 28.64-2.84 28.64h-5.88c0 .01-7.03-23.27-7.03-46.87z" />
                        </g>
                        <path
                            d="M72.21 181.56c0-1.46-1.18-2.64-2.64-2.64-1.46 0-2.64 1.18-2.64 2.64 0 1.46 1.18 2.64 2.64 2.64 1.46 0 2.64-1.18 2.64-2.64zM90.27 181.56c0-1.46-1.18-2.64-2.64-2.64-1.46 0-2.64 1.18-2.64 2.64 0 1.46 1.18 2.64 2.64 2.64 1.46 0 2.64-1.18 2.64-2.64z"
                            opacity={0.68}
                            fill="#7bb5db"
                        />
                    </g>
                );
        }
    }

    render() {
        if (this.props.type == 'button') {
            return (
                <div className="vectorBtn" style={{ backgroundColor: '#ffffff', width: 100, marginHorizontal: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderColor: this.props.selected ? '#6AC3DB' : '#E5E5E5', borderWidth: this.props.selected ? 3 : 1 }}
                    onClick={() => {
                        this.props.OnItemSelected();
                    }}>
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

export default R_legs;
