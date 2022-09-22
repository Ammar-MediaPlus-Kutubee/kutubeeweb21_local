import i18next from 'i18next';
import React, { Component } from 'react';

class HumanMouth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderSVG = (keyId) => {
        switch (keyId) {
            case 0:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fill="#9d1c0b">
                            <path d="M78.61 90.33s-4.37-.23-7.77-1.61c-3.4-1.38-4.69-4.41-5.06-4.6-.37-.18-.87.37.74 2.34 1.61 1.98 3.92 4.03 12.09 4.55v-.68zM78.61 90.33s4.37-.23 7.77-1.61c3.4-1.38 4.69-4.41 5.06-4.6.37-.18.87.37-.74 2.34-1.61 1.98-3.92 4.03-12.09 4.55v-.68z" />
                        </g>
                    </g>
                );
            case 1:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.61 84.15s-3.96-.18-7.6-.84-5.98-3.05-6.45-2.39c-.48.66-1.59 13.39 14.06 13.39-.01-4.42-.01-10.16-.01-10.16z"
                            fill="#720f07"
                        />
                        <path
                            d="M78.61 94.13s-3.59-.06-5.72-1.05-.87-2.95.17-3.68 3.36-1.22 4.03-.74c.66.48 1.53.74 1.53.74v4.73z"
                            fill="#b51612"
                        />
                        <path
                            d="M66.06 81.33s-.17 2.16.63 2.84c.8.68 1.87.6 1.87.6s.44 1.79 1.99 1.83c1.55.04 2.27-.4 2.27-.4s.12 1.12 2.35 1.51c2.23.4 3.31-.26 3.44-1.09v-2.56s-7.74-.02-12.55-2.73z"
                            fill="#fefefe"
                        />
                        <path
                            d="M78.61 84.15s3.96-.18 7.6-.84c3.65-.66 5.98-3.05 6.45-2.39.48.66 1.59 13.39-14.06 13.39.01-4.42.01-10.16.01-10.16z"
                            fill="#720f07"
                        />
                        <path
                            d="M78.61 94.13s3.59-.06 5.72-1.05c2.14-.99.87-2.95-.17-3.68-1.03-.74-3.36-1.22-4.03-.74-.66.48-1.53.74-1.53.74v4.73z"
                            fill="#b51612"
                        />
                        <path
                            d="M91.16 81.33s.17 2.16-.63 2.84c-.8.68-1.87.6-1.87.6s-.44 1.79-1.99 1.83c-1.55.04-2.27-.4-2.27-.4s-.12 1.12-2.35 1.51c-2.23.4-3.31-.26-3.44-1.09v-2.56s7.74-.02 12.55-2.73z"
                            fill="#fefefe"
                        />
                    </g>
                );
            case 2:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.61 86.07s-3.48-.24-6.68-1.1c-3.2-.87-5.25-4.01-5.67-3.15-.42.87-1.4 17.63 12.35 17.63V86.07z"
                            fill="#720f07"
                        />
                        <path
                            d="M78.61 99.22s-3.15-.07-5.03-1.38c-1.88-1.31-.76-3.88.15-4.85.91-.97 2.95-1.6 3.54-.97.58.63 1.35.97 1.35.97v6.23z"
                            fill="#b51612"
                        />
                        <path
                            d="M67.58 82.36s-.15 2.85.55 3.74c.7.89 1.65.79 1.65.79s.39 2.36 1.75 2.41c1.37.05 2-.52 2-.52s.11 1.47 2.07 1.99c1.96.52 2.91-.34 3.02-1.43v-3.38s-6.81-.03-11.04-3.6z"
                            fill="#fefefe"
                        />
                        <path
                            d="M78.61 86.07s3.48-.24 6.68-1.1c3.2-.87 5.25-4.01 5.67-3.15.42.87 1.4 17.63-12.35 17.63V86.07z"
                            fill="#720f07"
                        />
                        <path
                            d="M78.61 99.22s3.15-.07 5.03-1.38c1.88-1.31.76-3.88-.15-4.85-.91-.97-2.96-1.6-3.54-.97-.58.63-1.35.97-1.35.97v6.23z"
                            fill="#b51612"
                        />
                        <path
                            d="M89.64 82.36s.15 2.85-.55 3.74c-.7.89-1.65.79-1.65.79s-.39 2.36-1.75 2.41c-1.37.05-2-.52-2-.52s-.11 1.47-2.07 1.99c-1.96.52-2.91-.34-3.02-1.43v-3.38s6.81-.03 11.04-3.6z"
                            fill="#fefefe"
                        />
                    </g>
                );
            case 3:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.61 84.69s-3.67-.4-6.62-.94c-2.95-.53-4.15-.98-4.9.33s.39 7.93 11.55 7.88l-.03-7.27z"
                            fill="#720f07"
                        />
                        <path
                            d="M78.61 84.69s3.66-.43 6.61-.99 4.14-1.01 4.9.29c.76 1.3-.33 7.93-11.48 7.98l-.03-7.28z"
                            fill="#720f07"
                        />
                        <path
                            d="M87.92 85.8c.29-.97.3-1.85.16-2.62-.38-.02-4.12.6-6.78 1.05-1.79.3-3.6.31-5.39.02-2.67-.43-6.41-1.02-6.79-1-.13.77-.11 1.65.19 2.62.3.97 2.39 2.05 3.83 2.23-1.37-.07-2.64-.63-3.63-1.38-.04 1.47.06 2.42 1.05 3.29.99.87 4.49 1.96 8.08 1.95 3.59-.02 7.07-1.14 8.06-2.02.99-.88 1.07-1.83 1.02-3.3-.99.76-2.24 1.33-3.62 1.41 1.44-.19 3.53-1.28 3.82-2.25z"
                            fill="#fefefe"
                        />
                    </g>
                );
            case 4:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M87.48 85.19c-.25.13-1.14 2.23-3.5 3.18-2.35.95-5.37 1.11-5.37 1.11s-3.02-.16-5.37-1.11c-2.35-.95-3.24-3.05-3.5-3.18-.25-.13-.6.25.51 1.62 1.11 1.37 2.71 2.79 8.36 3.15 5.65-.36 7.25-1.78 8.36-3.15 1.11-1.37.76-1.75.51-1.62z"
                            fill="#9d1c0b"
                        />
                    </g>
                );
            case 5:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.71 84.87s-2.81-.05-5.43-.5c-2.62-.46-4.43-2.4-4.72-1.84-.3.56-.25 11.27 10.82 10.86-.3-3.7-.67-8.52-.67-8.52z"
                            fill="#720f07"
                        />
                        <path
                            d="M79.36 93.25s-2.54.05-4.12-.73-.8-2.45-.12-3.09c.68-.64 2.3-1.11 2.8-.72.5.39 1.13.58 1.13.58l.31 3.96z"
                            fill="#b51612"
                        />
                        <path
                            d="M69.64 82.84s.02 1.82.63 2.37 1.36.45 1.36.45.43 1.49 1.53 1.49c1.1-.01 1.58-.39 1.58-.39s.16.93 1.76 1.21c1.61.28 2.32-.3 2.36-1-.05-.6-.17-2.15-.17-2.15s-5.47.17-9.05-1.98z"
                            fill="#fefefe"
                        />
                        <path
                            d="M78.71 84.87s2.79-.25 5.33-.9 4.03-2.71 4.41-2.17c.38.54 2 11.19-9.08 11.59-.29-3.7-.66-8.52-.66-8.52z"
                            fill="#720f07"
                        />
                        <path
                            d="M79.36 93.25s2.54-.14 3.98-1.03c1.45-.89.42-2.49-.36-3.08-.78-.59-2.46-.93-2.9-.51-.44.42-1.04.66-1.04.66l.32 3.96z"
                            fill="#b51612"
                        />
                        <path
                            d="M87.4 82.18s.26 1.81-.26 2.4-1.29.55-1.29.55-.19 1.51-1.29 1.59c-1.1.07-1.63-.27-1.63-.27s-.01.94-1.57 1.33c-1.55.39-2.36-.13-2.5-.82-.05-.6-.17-2.15-.17-2.15s5.49-.23 8.71-2.63z"
                            fill="#fefefe"
                        />
                    </g>
                );
            case 6:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M70.83 85.62s3.28 3.06 8.37 3.24c5.09.18 6.42-1.08 7.78-1.14 1.36-.07.48.9-1.86 1.4-2.34.51-3.95 1.04-7.92.4-3.97-.64-6.51-2.57-7.28-3.28-.77-.71.01-1.33.91-.62z"
                            fill="#c34a27"
                        />
                    </g>
                );
            case 7:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M85.05 91.2c0-2.8-2.88-5.08-6.44-5.08-3.56 0-6.44 2.27-6.44 5.08 0 2.8 2.88 5.08 6.44 5.08 3.56 0 6.44-2.28 6.44-5.08z"
                            fill="#c34a27"
                        />
                    </g>
                );
            case 8:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.62 91.88V85.5l-.18-.03-.01.01c-.04 0-2.36-.15-4.51-.47-2.18-.32-2.46 9.09 4.73 9.09 0-.68-.01-1.44-.03-2.22z"
                            fill="#9d1c0b"
                        />
                        <path
                            d="M73.92 85.02s-.05 1.65.8 2.03c.85.38 2.72.8 3.13.44.41-.35.77-1.21.77-1.21v-.8l-4.7-.46z"
                            fill="#fff"
                        />
                        <path
                            d="M78.6 91.88V85.5l.18-.03.01.01c.05 0 2.36-.15 4.51-.47 2.18-.32 2.46 9.09-4.73 9.09 0-.68.01-1.44.03-2.22z"
                            fill="#9d1c0b"
                        />
                        <path
                            d="M83.3 85.02s.05 1.65-.8 2.03c-.85.38-2.72.8-3.13.44-.41-.35-.77-1.21-.77-1.21v-.8l4.7-.46z"
                            fill="#fff"
                        />
                    </g>
                );
            case 9:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fill="#c34a27">
                            <path d="M78.61 89.52s-3.25-.25-5.62-1.96-2.63-2.98-3.16-2.98c-.53 0-.82.53.94 2.47 1.76 1.94 5.27 3.49 7.85 3.49-.01-.33-.01-1.02-.01-1.02z" />
                            <path d="M78.61 89.52s3.25-.25 5.62-1.96 2.63-2.98 3.16-2.98c.53 0 .82.53-.94 2.47-1.76 1.94-5.27 3.49-7.85 3.49.01-.33.01-1.02.01-1.02z" />
                        </g>
                    </g>
                );
            case 10:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.61 87.51s-2.75.02-4.87-.65-3.02-1.11-3.25-.46c-.24.65 3.25 6.64 8.12 6.64v-5.53z"
                            fill="#9b3521"
                        />
                        <path
                            d="M72 86.29s.08 1.3 1.14 2.25c1.06.95 3.73 1.53 5.48 1.53V87.5s-3.16.03-6.62-1.21z"
                            fill="#fff"
                        />
                        <path
                            d="M74.96 91.7s1.11-.67 2.09-.66c.99.01 1.56.33 1.56.33v1.55s-1.93-.01-3.65-1.22z"
                            fill="#d84835"
                        />
                        <path
                            d="M78.61 87.51s2.75.02 4.87-.65 3.02-1.11 3.25-.46c.24.65-3.25 6.64-8.12 6.64v-5.53z"
                            fill="#9b3521"
                        />
                        <path
                            d="M85.22 86.29s-.08 1.3-1.14 2.25c-1.06.95-3.73 1.53-5.48 1.53V87.5s3.16.03 6.62-1.21z"
                            fill="#fff"
                        />
                        <path
                            d="M82.26 91.7s-1.11-.67-2.09-.66c-.99.01-1.56.33-1.56.33v1.55s1.93-.01 3.65-1.22z"
                            fill="#d84835"
                        />
                    </g>
                );
            case 11:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M68.19 86.4s2.46 6.31 10.42 6.31v-4.49l-6.82-.4-3.6-1.42z"
                            fill="#ef876f"
                        />
                        <path
                            d="M78.61 89.25S71 88.91 68.19 86.4c2.32.68 4.68.64 10.42.64v2.21z"
                            fill="#e06853"
                        />
                        <path
                            d="M89.03 86.4s-2.46 6.31-10.42 6.31v-4.49l6.81-.4 3.61-1.42z"
                            fill="#ef876f"
                        />
                        <path
                            d="M78.61 89.25s7.61-.34 10.42-2.85c-2.32.68-4.68.64-10.42.64v2.21z"
                            fill="#e06853"
                        />
                    </g>
                );
            case 12:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M86.99 83.37c.8 6.75 1.34 13.33-5.98 15.74-5.99 1.97-9.24-4.28-11.01-10.73l16.99-5.01z"
                            fill="#a52339"
                        />
                    </g>
                );
            case 13:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M87.04 88.08H70.18c-.51 0-.92-.23-.92-.52 0-.29.41-.52.92-.52h16.87c.51 0 .92.23.92.52-.01.28-.42.52-.93.52z"
                            fill="#a52339"
                        />
                    </g>
                );
            case 14:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M85.82 97.97c-2.65.31-4.31-.77-7.37-.63-3.24.15-4.26 1.14-7.09.73-1.81-.26-2.21-1.71-2.31-2.48-.32-2.45-.15-9.12 1.89-10.25 2.02-1.11 13.27-1.52 14.59.44 1.31 1.94 2.7 5.05 2.75 8.25.03 1.74.24 3.62-2.46 3.94z"
                            fill="#923732"
                        />
                        <path
                            d="M68.98 94.87c.02.27.04.52.07.73.1.76.5 2.22 2.31 2.48 2.83.4 3.85-.59 7.09-.73 3.06-.14 4.72.94 7.37.63 2.1-.25 2.43-1.44 2.47-2.78-3.45-2.78-15.09-4.35-19.31-.33z"
                            fill="#f3807c"
                        />
                        <path
                            d="M83.31 86.92c.75.04 1.48-.78 1.79-1.52-2.45-1.52-12.28-1.09-14.16-.06-.1.06-.2.13-.29.21.21.55.7 1.32 1.42 1.55.8.27 2.46-.16 5.3-.19 3.61-.02 4.89-.05 5.94.01z"
                            fill="#fff"
                        />
                        <path
                            d="M85.1 85.41c-2.45-1.52-12.28-1.09-14.16-.06-.1.06-.2.13-.29.21.13.36.39.8.75 1.14-.24-.44-.01-1.07.76-1.19 2.04-.53 9.28-1.14 12 .08.24.14.07.62-.27 1.2.52-.25.98-.84 1.21-1.38z"
                            opacity={0.4}
                            fill="#bbaebb"
                        />
                    </g>
                );
            case 15:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M83.66 88.79a.54.54 0 01-.45-.12c-1.74-1.46-3.82-1.83-6.18-1.12-1.82.55-3.13 1.57-3.14 1.58-.24.19-.58.14-.77-.09a.544.544 0 01.09-.77c.06-.05 5.84-4.51 10.7-.44a.551.551 0 01-.25.96z"
                            fill="#5c1000"
                        />
                    </g>
                );
            case 16:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M71.07 83.73s.99 16.38 8.81 13.41c7.82-2.97 6.11-14.83 6.11-14.83s-8.97 3.36-14.92 1.42z"
                            fill="#923732"
                        />
                        <path
                            d="M73.21 86.52c4.02 1.67 10.42.04 11.62-1.42.42-.63.53-1.7.57-2.57-1.97.65-8.4 2.57-13.35 1.47.1 1.1.39 2.13 1.16 2.52z"
                            fill="#fff"
                        />
                        <path
                            d="M72.05 84c.02.22.05.43.08.63 3.06.93 7.98.36 11.25-.87.9-.34 1.52.5 1.19 1.58.1-.08.19-.17.26-.25.42-.63.53-1.7.57-2.57-1.97.66-8.4 2.58-13.35 1.48z"
                            opacity={0.4}
                            fill="#bbaebb"
                        />
                        <path
                            d="M79.88 97.14c-3.75 1.42-5.93-1.6-7.18-5.13 3.74-2.04 8.97-1.62 12.18.11-.92 2.14-2.45 4.05-5 5.02z"
                            fill="#f3807c"
                        />
                    </g>
                );
            case 17:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M83.6 99.97c-1.84.37-2.98-.91-5.1-.74-2.24.17-2.95 1.34-4.9.87-1.25-.31-1.53-2.03-1.6-2.93-.22-2.9-.1-10.78 1.31-12.11 1.4-1.32 9.17-1.8 10.09.52.9 2.29 1.87 5.97 1.9 9.75.02 2.05.16 4.27-1.7 4.64z"
                            fill="#923732"
                        />
                        <path
                            d="M71.95 96.31c.01.32.03.61.05.86.07.9.34 2.62 1.6 2.93 1.96.48 2.66-.69 4.9-.87 2.12-.16 3.26 1.11 5.1.74 1.45-.29 1.68-1.7 1.71-3.28-3.22-4.09-10.43-2.73-13.36-.38z"
                            fill="#f3807c"
                        />
                        <path
                            d="M81.86 86.92c.52.05 1.03-.92 1.24-1.79-1.69-1.79-8.5-1.29-9.79-.07-.07.07-.14.15-.2.25.14.65.48 1.56.98 1.84.56.31 1.7-.19 3.66-.22 2.5-.06 3.38-.08 4.11-.01z"
                            fill="#fff"
                        />
                        <path
                            d="M83.1 85.13c-1.69-1.79-8.5-1.29-9.79-.07-.07.07-.14.15-.2.25.09.42.27.95.52 1.34-.17-.52-.01-1.26.53-1.41 1.41-.63 6.42-1.35 8.3.1.16.16.05.73-.19 1.42.35-.3.67-.99.83-1.63z"
                            opacity={0.4}
                            fill="#bbaebb"
                        />
                    </g>
                );
            case 18:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M82.96 90.82c.25-.56 1.44-.68 2.42-1.15.76-.36 1.38-.95 1.92-1.2 1.09-.54 1.49 1.27 2.59 1.95 2.03 1.26 3.12.76 3.03 2-.08 1.1-4.54 2.22-6.99 1.25-1.75-.69-2.98-1.77-2.97-2.85z"
                            fill="#ff9c7f"
                        />
                        <path
                            d="M77.72 92.3c-5.69-.19-8.8-3.42-8.93-3.56a.408.408 0 01.02-.57c.16-.15.42-.14.57.02.03.03 3.26 3.37 9.01 3.32 8.42-.08 10.67-4.45 10.69-4.5a.4.4 0 01.54-.18c.2.1.28.34.18.54-.04.08-.48.93-1.61 1.91-.34.29-1.24 1.17-.48 1.95 1.04 1.07 2.85.72 3.49 1.55.44.57-.04 1.34-1.22 1.66-1.77.48-3.78.02-4.83-.39-2.04-.79-2.44-2.12-2.89-2.02-1.16.23-2.35.27-3.86.28-.24 0-.46 0-.68-.01z"
                            fill="#e69a77"
                        />
                        <path
                            d="M82.96 90.82c.25-.56 1.44-.68 2.42-1.15.76-.36 1.38-.95 1.92-1.2 1.09-.54 1.49 1.27 2.59 1.95 2.03 1.26 3.12.76 3.03 2-.08 1.1-4.54 2.22-6.99 1.25-1.75-.69-2.98-1.77-2.97-2.85z"
                            fill="#ff836f"
                        />
                        <path
                            d="M86.33 92.88c-1.01-.39-2.18-1.33-1.14-1.87.35-.17.6-.34 1.02-.49.26-.09.46-.08.79.12.41.25.88.65 1.14.47.19-.13-.32-.37-.74-.61-.33-.18-.59-.36-.42-.48.66-.44 1.18-.91 1.21-1.37-.19-.08-.66-.31-.91-.19-.53.26-1.16.84-1.92 1.2-.98.47-2.17.58-2.42 1.15 0 1.09 1.22 2.16 2.96 2.85 2.38.94 6.66-.09 6.97-1.16-1.95 1.36-5.26.87-6.54.38z"
                            fill="#dd7260"
                        />
                        <path
                            d="M89.67 93.06c-.91.02-2.37-.14-2.2-.61.1-.27 1.09.07 2.4-.01 1.3-.08 2.25-.84 2.5-.4.24.45-1.66.99-2.7 1.02z"
                            opacity={0.5}
                            fill="#ff9c7f"
                        />
                        <path
                            d="M77.74 91.83c-5.69-.19-8.8-3.42-8.93-3.56a.408.408 0 01.02-.57c.16-.15.42-.14.57.02.03.03 3.26 3.37 9.01 3.32 8.42-.08 10.67-4.45 10.69-4.5a.4.4 0 01.54-.18c.2.1.28.34.18.54-.1.2-2.49 4.86-11.4 4.94-.24 0-.46-.01-.68-.01z"
                            fill="#8d4241"
                        />
                    </g>
                );
            case 19:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M73.8 90.2c-.18 0-.35-.13-.39-.31-.04-.21.09-.42.31-.47 1.45-.3 2.06-.69 4.38-2.28.2-.13.4-.28.62-.44 1.58-1.13 3.74-2.67 5-1.19a.397.397 0 11-.61.51c-.73-.86-2.21.09-3.94 1.32-.22.16-.43.31-.63.45-2.38 1.63-3.06 2.07-4.66 2.4-.02.01-.05.01-.08.01z"
                            fill="#5c1000"
                        />
                    </g>
                );
            case 20:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M78.43 88.88c-.73 0-1.45-.31-2.03-.87-.45-.44-1.13-.94-1.81-.86-.48.05-.93.39-1.34 1.02-.13.2-.41.26-.61.12a.436.436 0 01-.12-.61c.56-.85 1.23-1.33 1.98-1.41 1.02-.11 1.94.54 2.52 1.11.43.42.96.64 1.49.62.56-.02 1.11-.31 1.57-.84a2.69 2.69 0 011.96-.93c.63-.02 1.6.19 2.63 1.25.17.17.17.45-.01.62-.17.17-.45.17-.62-.01-.64-.66-1.32-1-1.98-.98-.5.01-.97.24-1.32.63-.63.71-1.39 1.11-2.2 1.14h-.11z"
                            fill="#5c1000"
                        />
                    </g>
                );
            case 21:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M71.01 90.89c.89 1.26 3.13-.55 7.68-.08 5.34.55 5.65 1.88 7.26 1.18 1.93-.85-1.85-6.44-6.95-6.67-5-.24-9.35 3.66-7.99 5.57z"
                            fill="#923732"
                        />
                        <path
                            d="M74.17 89.07c-1.12.28-1.96 1.23-3.04 1.95.96.97 3.19-.66 7.56-.21 5.34.55 5.65 1.88 7.26 1.18.13-.06.23-.13.31-.23-3.15-3.15-7.82-4.1-12.09-2.69z"
                            fill="#f3807c"
                        />
                        <path
                            d="M78.64 92.73c-1.42-.11-4.7.42-4.65-.22.05-.66 3.07-1.19 4.74-1.07 1.67.13 4.45 1.11 4.27 1.75-.13.5-2.82-.34-4.36-.46z"
                            fill="#e69a77"
                        />
                    </g>
                );
            case 22:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M79.23 92.2c-4.06.83-4.59 2.3-6.88 2.37-1.94.06-1.44-2.2.03-4.26.66-.92 1.51-1.79 2.42-2.41 2.76-1.86 6.61-1.38 9.31-.19 1.92.85 3.26 2.07 3.17 3.05-.13 1.69-4.51.72-8.05 1.44z"
                            fill="#923732"
                        />
                        <path
                            d="M77.98 90.65c-2.67.61-5.39 1.65-6.69 3.53.2.27.54.42 1.06.4 2.29-.07 2.82-1.54 6.88-2.37 3.54-.72 7.92.25 8.06-1.44.01-.16-.01-.32-.07-.49-2.12-.67-6.54-.34-9.24.37z"
                            fill="#f3807c"
                        />
                        <path
                            d="M84.11 87.71c-.36.47-.93.83-2.29.86-1.98.05-3.41-.05-6.72 1.3-.96.39-2.18.83-2.72.44.66-.92 1.51-1.79 2.42-2.41 2.76-1.86 6.62-1.38 9.31-.19z"
                            fill="#fff"
                        />
                        <path
                            d="M84.11 87.71c-2.7-1.19-6.56-1.67-9.31.19-.92.62-1.77 1.49-2.42 2.41.22.16.55.18.94.12.16-1.23 1.86-2.48 2.84-2.78 2.08-.66 6.03-.96 6.94.75.5-.15.8-.4 1.01-.69z"
                            fill="#d7d5d7"
                        />
                        <path
                            d="M71.44 94.26c-.22.12-.77.73-.98 1.09-.36.61-.59 1.14-.73 1.64-.11.38-.31 1.45.41 1.56.54.08.85-.72.92-1.17.16-1.22.32-2.25.78-2.88.06-.22-.12-.39-.4-.24z"
                            opacity={0.75}
                            fill="#e2ffff"
                        />
                        <path
                            d="M70.24 97.33c-.02.07-.07.12-.15.1-.1-.02-.12-.15-.12-.24 0-.13.05-.28.16-.27.09.01.18.22.11.41z"
                            fill="#fff"
                        />
                    </g>
                );
            case 23:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M77.31 95.79c-1.88-.33-.82-1.77-.82-4.24s-1.25-5.89.84-6.08c2.09-.19 3.77 3.78 3.77 5.65 0 1.01-.39 2.11-.96 2.99-.75 1.18-1.61 1.89-2.83 1.68z"
                            fill="#923732"
                        />
                        <path
                            d="M76.48 92.04c-.12 2.17-.92 3.44.83 3.75 1.22.21 2.08-.5 2.83-1.68.32-.5.58-1.06.75-1.63-1.36-.58-2.87-.69-4.41-.44z"
                            fill="#f3807c"
                        />
                    </g>
                );
            case 24:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M85.03 89c-5.36-2.92-11.55-.84-11.81-.75-.24.08-.36.34-.28.58.08.24.34.36.58.28.02-.01.61-.22 1.57-.41-.88.32-1.99.88-3.01 1.86-1.69 1.61-2.17 5.26.19 5.7 1.58.3 2.76-2.89 4.06-4.95.88-1.39 1.71-2.53 2.98-2.74 1.7-.11 3.5.55 4.83 1.28.07.04.41.11.48.11.16 0 .51-.19.6-.35a.46.46 0 00-.19-.61z"
                            opacity={0.4}
                            fill="#e69a77"
                        />
                        <path
                            d="M74.76 88.19s-2.49.26-4.6 2.27c-1.69 1.61-3.3 4.34-.24 5.01 3.06.67 4.18-2.23 5.48-4.29 1.15-1.82 2.41-2.51 3.74-3.27.02-.01-2.18-.29-4.38.28z"
                            fill="#ff836f"
                        />
                        <path
                            d="M74.76 88.19s-1.13.12-2.52.81c.24.26.75.01 1.59-.16 1.27-.17-1.76 1.36-.9 1.53.5.1 1.13-.97 2.33-1.67.42-.24 1.55-.26 1.5.08-1 1.13-1.67 1.46-2.87 3.89-.7 1.42-3.27 3.12-4.82 2.5.23.12.51.22.84.29 3.06.67 4.18-2.23 5.48-4.29 1.15-1.82 2.41-2.51 3.74-3.27.03 0-2.17-.28-4.37.29z"
                            opacity={0.4}
                            fill="#d37673"
                        />
                        <path
                            d="M84.84 89.53c-.07 0-.15-.02-.22-.06-5.01-2.73-11.02-.71-11.08-.68-.24.08-.5-.04-.58-.28-.08-.24.04-.5.28-.58.26-.09 6.45-2.18 11.81.75.22.12.3.4.18.62-.07.15-.23.23-.39.23z"
                            fill="#5c1000"
                        />
                    </g>
                );
            case 25:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <g fill="#5c1000">
                            <path d="M75.58 92.79c-2.2 0-3.78-.52-3.89-.55a.383.383 0 01-.24-.49c.07-.2.28-.31.49-.24.04.01 3.83 1.24 7.77-.19 2.22-.81 4.51-3.07 5.23-5.16.07-.2.29-.31.49-.24s.31.29.24.49c-.79 2.32-3.24 4.74-5.69 5.63-1.57.57-3.09.75-4.4.75z" />
                            <path d="M86.25 87.23c-.1 0-.2-.04-.27-.11-.57-.57-1.58-.77-1.92-.8a.38.38 0 11.06-.76c.06.01 1.52.14 2.4 1.02.15.15.15.39 0 .54-.08.07-.18.11-.27.11z" />
                        </g>
                    </g>
                );
            case 26:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M75.46 90.54c1.96-.27 4.58-.52 7.26.07 2.12.47 2.77.29 3.61-.61.97-1.04-.15-4.48-2.36-4.09-1.94.35-3.08.63-5.26.65-1.54.02-3.02-.2-4.61-.79-1.34-.5-2.07-.46-2.71.35-1.11 1.38-1.2 3.55.13 4.05 1.51.57 1.84.66 3.94.37z"
                            fill="#923732"
                        />
                        <path
                            d="M71.41 90.11c.04.02.07.04.11.05 1.51.57 1.84.66 3.95.37 1.96-.27 4.58-.52 7.26.07 2.12.47 2.77.29 3.61-.61.06-.07.12-.15.17-.24-4.6-2.76-11.22-3.44-15.1.36z"
                            fill="#f3807c"
                        />
                    </g>
                );
            case 27:

                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M74.18 92.73c1.3-.4 3.19-.72 4.68-.83 1.49-.1 2.91.2 4.6.56 1.69.35 2.89-.91 2.77-2.28-.15-1.78-1.28-4.13-2.95-4.69-2.43-.81-7.74-.35-9.17.14-1.43.49-2.73 3.05-3.06 4.17-.5 1.77 1.19 3.53 3.13 2.93z"
                            fill="#fff"
                        />
                        <path
                            d="M83.58 91.85c-1.38-.25-3.06-.69-4.99-.61-2.3.09-3.79.48-5.22.82-.95.23-1.66.09-1.89-.16.58.75 1.6 1.17 2.71.83 1.3-.4 3.19-.72 4.68-.83 1.49-.1 2.91.2 4.6.56 1.03.22 1.88-.17 2.36-.82-.57.32-1.71.31-2.25.21z"
                            fill="#d7d5d7"
                        />
                        <path
                            d="M72.95 89.35c-.57-.32-.83-.68-1.19-1.16-.33.61-.58 1.2-.7 1.61-.24.82-.01 1.64.51 2.23.1-1.14.66-2.13 1.38-2.68zM86.24 90.18c-.05-.6-.21-1.25-.47-1.89-.22.45-.59.81-1.16.89.84.56 1.17 1.43 1.26 2.39.28-.41.41-.89.37-1.39z"
                            fill="#923732"
                        />
                        <path
                            d="M83.29 85.49c-2.43-.81-7.74-.35-9.17.14-.88.3-1.78 1.5-2.36 2.55.14-.07 1.47-1.61 2.23-1.87 1.43-.49 6.6-1.01 9.03-.2.94.31 1.65.93 2.04 1.41.31.38.61.83.71.76-.5-1.26-1.37-2.42-2.48-2.79z"
                            fill="#d7d5d7"
                        />
                        <path
                            d="M72.97 89.54c-.07 0-.14-.05-.16-.12-.03-.09.02-.18.11-.21.05-.02 5.22-1.51 11.8-.14.09.02.15.11.13.2a.17.17 0 01-.2.13c-6.49-1.35-11.59.12-11.64.14h-.04z"
                            fill="#4d4d4d"
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
                                this.renderSVG(this.props.targetId)
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
                        this.renderSVG(this.props.targetId)
                    }
                </g>
            );
        }
    }
}

export default HumanMouth;
