import i18next from 'i18next';
import React, { Component } from 'react';

class M_head extends Component {
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
                                d="M83.41 54.6c0-2.71-2.2-4.91-4.91-4.91s-4.91 2.2-4.91 4.91c0 1.81.99 3.37 2.45 4.23.02.02.02.03.05.05 3.32 2.62 1.24 8.39 1.57 14.87.04.74.17 1.35.17 1.88 0 1.44 2.07.93 2.14.6.03-.12.06-.49.06-.73-.05-2.65-.78-11.55-.78-12.59 0-3.12 1.99-4.21 1.99-4.21h-.03c1.32-.89 2.2-2.39 2.2-4.1z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="#69c2db"
                            />
                        </g>
                    </g>
                );
            case 1:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M97.88 53.2c-1.05.26-2.23.2-3.45.04.29-.69.58-1.39.88-2.08.64-.2 1.28-.4 1.92-.61.03-.01.07-.01.09-.03.02-.02.02-.06.01-.09-.02-.06-.09-.1-.14-.08-.51.31-1.13.5-1.78.64.1-.18.21-.36.17-.53-.02-.22-.26-.41-.52-.51-.5-.2-1.08.01-1.22.48-.37-.68-.66-1.37-.75-2.05-.01-.06-.09-.09-.15-.06-.03.01-.06.03-.07.06-.01.03.02.06.03.09.3.76.59 1.51.89 2.27-.12.7-.26 1.39-.43 2.09-1.09-.76-1.98-2-2.81-3.35-.07-.11-.21-.1-.31.02-.1.13-.12.3-.04.39 1.02 1.12 2.03 2.25 3.05 3.37-.25.99-.55 1.98-.89 2.96-1.02-.44-1.96-1.21-2.89-2.05-.07-.06-.18-.06-.23.02a.17.17 0 00.04.23l2.99 2.04c-.34.95-.71 1.9-1.12 2.86-.95-.53-1.8-1.36-2.63-2.27-.07-.07-.17-.08-.23 0-.06.07-.05.18.02.24.91.75 1.83 1.5 2.74 2.25-.33.77-.69 1.54-1.06 2.31-1.39-.65-2.65-1.79-3.88-3.03-.1-.09-.23-.09-.31.01-.08.1-.06.25.04.32l3.99 3.03c-.45.91-.92 1.83-1.41 2.74-1.13-.84-1.9-2.29-2.57-3.81-.06-.11-.21-.13-.36-.01-.16.12-.22.3-.15.39.93 1.29 1.87 2.59 2.82 3.91-.4.74-.82 1.48-1.24 2.21-1.84-1.14-2.89-3.03-3.67-4.63-.07-.12-.22-.06-.35.15-.13.22-.17.46-.09.55.99 1.25 2.17 2.72 3.71 4.64-.3.52-2.91 5.85-3.23 6.38-.27.48-.13 1.02.35 1.22.49.2 1.03-.02 1.23-.5.29-.7 2.89-6.21 3.18-6.92 1.35.01 2.89.02 4.72.03.08 0 .17.04.23-.01.06-.04.09-.15.09-.26 0-.21-.13-.37-.28-.35-1.63.5-3.24.41-4.6.19.35-.84.7-1.67 1.05-2.51l4.87-.66c.07-.01.14.01.19-.03.05-.04.07-.13.08-.22 0-.17-.1-.29-.23-.26-1.46.62-3.06.75-4.72.72.39-.92.77-1.83 1.15-2.75 1.6-.07 3.2-.14 4.8-.2.06 0 .14.02.18-.01.05-.03.06-.1.06-.17-.01-.13-.11-.24-.23-.22-1.4.41-3 .39-4.66.24.29-.69.58-1.39.87-2.08l3.4-.15c.05 0 .1.01.13-.01s.05-.07.04-.12c-.01-.1-.08-.18-.17-.16-1 .29-2.13.29-3.3.19.44-1.04.87-2.08 1.31-3.12 1.18.26 2.35.53 3.53.79.05.01.09.04.13.02.04-.01.06-.06.07-.11.02-.1-.04-.19-.12-.2-1.12.02-2.3-.32-3.5-.77l1.17-2.79c1.18 0 2.36-.01 3.54-.01.05 0 .1.02.13-.01.03-.02.05-.07.05-.12.01-.11-.06-.19-.15-.18zm-24 10.3c-.78 1.6-1.84 3.49-3.67 4.63-.42-.74-.84-1.48-1.24-2.21.95-1.31 1.89-2.62 2.82-3.91.07-.1.01-.27-.15-.39-.15-.12-.31-.1-.36.01-.67 1.53-1.44 2.97-2.57 3.81-.49-.91-.96-1.83-1.41-2.74l3.99-3.03c.1-.07.12-.22.04-.32-.08-.1-.21-.1-.31-.01-1.23 1.25-2.49 2.38-3.88 3.03-.37-.77-.73-1.54-1.06-2.31.92-.75 1.83-1.5 2.74-2.25.07-.06.08-.16.02-.24-.06-.07-.16-.07-.23 0-.83.91-1.68 1.74-2.63 2.27-.41-.95-.78-1.9-1.12-2.86 1-.68 1.99-1.36 2.99-2.04.08-.05.1-.15.04-.23-.05-.08-.15-.08-.23-.02-.93.85-1.87 1.62-2.89 2.05-.34-.99-.64-1.97-.89-2.96 1.02-1.12 2.03-2.25 3.05-3.37.08-.09.06-.26-.04-.39s-.24-.13-.31-.02c-.84 1.35-1.72 2.59-2.81 3.35-.17-.7-.31-1.39-.43-2.09.3-.76.59-1.51.89-2.27.01-.03.04-.06.03-.09 0-.03-.03-.05-.07-.06-.06-.02-.13 0-.15.06-.09.68-.39 1.36-.75 2.05-.14-.47-.72-.68-1.22-.47-.26.1-.51.29-.52.51-.03.17.07.35.17.53-.65-.14-1.27-.33-1.78-.64-.06-.03-.12.01-.14.08-.01.03-.01.07.01.09.02.02.06.02.09.03l1.92.6c.29.69.58 1.39.87 2.08-1.22.15-2.4.22-3.45-.04-.09-.01-.16.07-.17.17 0 .05.01.1.05.12.03.02.09.01.13.01 1.18 0 2.36.01 3.54.01l1.17 2.79c-1.2.44-2.38.79-3.5.77-.09.01-.14.1-.12.2.01.05.04.1.07.11.04.01.09-.01.13-.02 1.18-.26 2.35-.53 3.53-.79.44 1.04.87 2.08 1.31 3.12-1.17.1-2.3.1-3.3-.19-.09-.02-.17.06-.17.16 0 .05.01.1.04.12.03.02.09.01.13.01l3.4.15c.29.69.58 1.39.87 2.08-1.65.14-3.25.17-4.65-.25-.12-.02-.23.09-.23.22 0 .07.01.14.06.17.04.03.12.02.18.01 1.6.07 3.2.14 4.8.2.38.92.77 1.83 1.15 2.75-1.66.02-3.27-.1-4.72-.72-.13-.04-.23.09-.23.26 0 .09.03.18.08.22.05.04.12.03.19.03l4.87.66 1.05 2.51c-1.35.21-2.97.31-4.6-.19-.15-.02-.28.14-.28.35 0 .11.03.22.09.26.06.05.15.02.23.01 1.83-.01 3.37-.02 4.72-.03.29.7 2.68 4.96 2.98 5.66.19.48.74.7 1.23.5.48-.2.61-.75.35-1.22-.31-.52-2.71-4.6-3.02-5.12 1.54-1.92 2.71-3.4 3.71-4.64.08-.09.04-.33-.09-.55-.12-.19-.27-.25-.34-.13z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#1d1d1b"
                        />
                    </g>
                );
            case 2:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M99.19 59.45c-3.06 9.29-11.58 13.91-11.58 13.91.73 3.43 4.01 4.62 4.01 4.62 9.73-5.52 7.57-18.53 7.57-18.53zm-41.25 0s-2.16 13.02 7.56 18.53c0 0 3.28-1.19 4.01-4.62 0-.01-8.51-4.62-11.57-13.91z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#9aab20"
                        />
                    </g>
                );
            case 3:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path fill="#000" d="M94.08 58.93c.23-1.88.23-3.77-.01-5.67 1.52-.62 2.55-1.51 3.08-2.66.71-1.54.19-2.95.17-3.01a.662.662 0 00-.86-.39h-.01c-.35.13-.52.52-.39.87 0 .01.34.96-.13 1.98-.35.75-1.04 1.37-2.07 1.84-.23-1.23-.55-2.47-.97-3.7a.67.67 0 00-.85-.42h-.01c-.34.12-.52.5-.41.85.66 1.91 1.06 3.82 1.22 5.71-.48.02-1.36-.02-2.33-.37-1.94-.71-3.26-2.32-3.9-4.78a.672.672 0 10-1.3.34c.95 3.64 3.1 5.11 4.74 5.71 1.18.43 2.25.47 2.86.45.07 3.16-.56 6.29-1.88 9.35-.6-.49-1.85-1.86-1.31-4.39a.672.672 0 00-.52-.8.672.672 0 00-.8.52c-.67 3.16.93 5.16 2.04 5.92-.05.11-.11.22-.16.33-.56 1.09-1.16 2.06-1.75 2.92-1.77 2.56-3.41 4.01-3.43 4.03-.28.24-.31.67-.07.95.19.22.48.28.74.19a.72.72 0 00.21-.12c.09-.07 1.48-1.3 3.1-3.5.8.12 2.62.31 4.72-.04.78-.13 1.53-.33 2.23-.58 2.64-.96 4.67-2.78 5.95-5.35.17-.33.03-.74-.3-.9a.667.667 0 00-.9.3c-1.43 2.88-3.84 4.63-7.16 5.2-1.47.25-2.8.21-3.67.12.51-.77 1.02-1.62 1.5-2.55 1.4-2.71 2.28-5.51 2.63-8.35zM72.3 73.54c-.02-.02-1.75-1.54-3.57-4.22h.01c-.22-.27-.4-.57-.57-.88a.36.36 0 01-.07-.1c-.16-.22-.33-.44-.43-.7-.01-.02-.01-.03-.02-.05-.18-.32-.37-.66-.55-1-2.33-4.51-3.11-9.18-2.35-13.92 1.32.19 2.54-.06 3.61-.76 2.96-1.93 3.77-6.61 3.8-6.81a.67.67 0 00-1.32-.22c-.01.04-.73 4.28-3.21 5.9-.78.51-1.65.7-2.63.56.2-.91.46-1.82.77-2.73a.67.67 0 00-.41-.85h-.01a.67.67 0 00-.85.42c-.69 2.01-1.12 4.04-1.28 6.06-1.18-.1-2.08-.55-2.76-1.37-1.88-2.26-1.32-6.53-1.32-6.59a.676.676 0 00-.57-.76.676.676 0 00-.76.57c-.03.2-.65 4.9 1.61 7.63.59.71 1.31 1.22 2.16 1.53.48.18 1.01.29 1.58.33-.03 1.12.03 2.23.16 3.34.04.33.09.65.14.97-1.2-.32-3.59-1.3-4.04-4.01a.668.668 0 00-.77-.55c-.37.06-.61.41-.55.77.46 2.78 2.57 4.24 4.34 4.88.48.17.93.29 1.32.35.42 1.83 1.07 3.64 1.94 5.4-2.81.44-5.05.04-6.67-1.18-2.33-1.76-2.61-4.7-2.61-4.74a.664.664 0 00-.72-.61c-.37.03-.65.35-.62.72.01.14.32 3.55 3.13 5.69.6.46 1.27.82 2 1.08 1.71.62 3.77.72 6.15.29 2.29 4.11 4.96 6.45 5.08 6.56.06.06.14.1.21.12.25.09.55.03.74-.19.22-.26.19-.68-.09-.93z" />
                    </g>
                );
            case 4:
                return (
                    <g transform={`translate(${this.props.x}, ${this.props.y})`} >
                        <path
                            d="M83.89 74.21c1.68.58 3.36 1.17 4.92 2.03.88.49 1.78.98 2.62 1.53V49.06c0-2.28-1.85-4.13-4.13-4.13h-.77c-2.28 0-4.13 1.85-4.13 4.13v24.67c.49.15.99.31 1.49.48z"
                            fill="#f9c3be"
                        />
                        <path
                            d="M84.81 64.23c1.17.4 2.34.81 3.42 1.41.61.34 1.24.68 1.82 1.06V49.59a2.87 2.87 0 00-2.87-2.87h-.54a2.87 2.87 0 00-2.87 2.87v14.3c.35.1.69.22 1.04.34z"
                            fill="#b76c69"
                        />
                        <g>
                            <path
                                d="M71.85 74.21c-1.68.58-3.36 1.17-4.92 2.03-.88.49-1.78.98-2.62 1.53V49.06c0-2.28 1.85-4.13 4.13-4.13h.77c2.28 0 4.13 1.85 4.13 4.13v24.67c-.49.15-.99.31-1.49.48z"
                                fill="#f9c3be"
                            />
                            <path
                                d="M70.93 64.23c-1.17.4-2.34.81-3.42 1.41-.61.34-1.23.68-1.82 1.06V49.59a2.87 2.87 0 012.87-2.87h.54a2.87 2.87 0 012.87 2.87v14.3c-.34.1-.69.22-1.04.34z"
                                fill="#b76c69"
                            />
                        </g>
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

export default M_head;
