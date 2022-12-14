import React, { useState } from 'react'
// import i18n from '../../../i18n/i18n'
// import Icon from '../../../utils/customIcons'
// import { mScale } from '../../../utils/functions'
// import globalStyles from '../../../utils/globalStyles'
// import styles from '../styles'
// import BookProgress from './BookProgress'
// import MenuButton from './MenuButton'
import { motion } from "framer-motion"
import MenuButton from './MenuButton';

export default function BookMenu({ currentMode, playForMeMode, onPlayforMePressed, numberOfPages, currentPage, showBookMenu, onMenuButtonPressed, onBookMenuHeight, language, drawing, currentOrientation, addNote, reflowable, onToggleNightMode, currentTheme, toggleFont, goToAdditions, additionsNumber, toggleZoom }) {
    // const theme = useTheme()
    const [menuHeight, setMenuHeight] = useState(0)
    const onLayout = (event) => {
        const { height, width } = event.nativeEvent.layout;
        console.log('height11111', height)
        if (currentOrientation == 'landscape') {
            setMenuHeight(width)
            onBookMenuHeight(width)
        } else {
            setMenuHeight(height)
            onBookMenuHeight(height)
        }

    }
    return (
        <motion.div
            className="book-menu"
            transition={{
                type: 'timing',
                duration: 0.3,
                // easing: Easing.out(Easing.linear)
            }}
            className={`book-menu ${currentTheme ? 'backgroundNight' : ''}`}
            animate={{ y: showBookMenu ? 0 : '100%', opacity: showBookMenu ? 1 : 0, }}
        // onLayout={onLayout}
        >
            {/* {currentOrientation == 'portrait' ?
                <BookProgress language={language} numberOfPages={numberOfPages} currentPage={currentPage} currentOrientation={currentOrientation} currentTheme={currentTheme} />
                :
                null
            } */}
            {reflowable ?
                <>

                    <div
                        className={'bookMenuIconsWrapper'}
                    // style={[styles.bookMenuIconsWrapper, { flexDirection: currentOrientation == 'portrait' ? 'row' : 'column' }]}
                    >

                        <MenuButton
                            landscape={currentOrientation == 'landscape'}
                            onClick={() => {
                                onMenuButtonPressed('record')
                            }}
                            icon={
                                <svg
                                    width={18}
                                    height={29}
                                    viewBox="0 0 18 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.006 0C5.569 0 2.75 2.69 2.75 6.022v7.037c0 3.333 2.818 6.022 6.255 6.022 3.436 0 6.255-2.689 6.255-6.022V6.022C15.26 2.695 12.442 0 9.006 0zm0 1.16c2.824 0 5.087 2.173 5.087 4.868v.157H10.94a.565.565 0 00-.54.588.567.567 0 00.596.532h3.102v1.12H10.946a.565.565 0 00-.54.589.567.567 0 00.596.532h3.102v1.12h-3.153a.565.565 0 00-.539.589.567.567 0 00.596.532h3.102v1.277c0 2.69-2.257 4.869-5.087 4.869-2.83 0-5.087-2.174-5.087-4.869v-1.277h3.102a.561.561 0 100-1.126H3.936v-1.12h3.102a.561.561 0 100-1.126H3.936v-1.12h3.102c.204 0 .397-.102.499-.281a.561.561 0 00-.5-.846H3.937v-.157c-.017-2.678 2.24-4.851 5.07-4.851zM.39 9.613a.495.495 0 00-.39.493v2.802c0 4.313 3.147 7.938 7.28 8.734v5.254H3.597c-1.078 0-1.968-.016-1.968.28V28h14.676v-.823c0-.297-.89-.28-1.967-.28h-3.619v-5.255c4.14-.802 7.282-4.42 7.282-8.734v-2.802a.497.497 0 00-.5-.493.493.493 0 00-.498.493v2.802c0 4.37-3.584 7.91-8.008 7.91-4.423 0-8.007-3.54-8.007-7.91v-2.802a.49.49 0 00-.165-.37.489.489 0 00-.385-.123H.39zm8.065 12.152c.181.01.363.033.55.033.187 0 .368-.022.55-.033v5.115h-1.1v-5.115z"
                                        fill="#38395B"
                                    />
                                    <path
                                        d="M9.006 1.16c2.824 0 5.086 2.174 5.086 4.869v.156H10.94a.565.565 0 00-.54.589.567.567 0 00.596.532h3.102v1.12h-3.153a.565.565 0 00-.539.588.567.567 0 00.596.533h3.102v1.12H10.95a.565.565 0 00-.539.588.567.567 0 00.595.533h3.103v1.277c0 2.689-2.258 4.868-5.087 4.868-2.83 0-5.087-2.173-5.087-4.868v-1.277h3.102a.561.561 0 100-1.126H3.936v-1.12h3.102c.204 0 .397-.102.499-.281a.561.561 0 00-.5-.846H3.937v-1.12h3.102a.561.561 0 100-1.126H3.936v-.157c-.017-2.678 2.24-4.852 5.07-4.852z"
                                        className="fillBlue"
                                    // fill={theme.colors.blue}
                                    />
                                </svg>
                            } />

                        <MenuButton
                            onClick={addNote}
                            landscape={currentOrientation == 'landscape'}
                            icon={
                                <svg
                                    width={33}
                                    height={33}
                                    viewBox="0 0 33 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.018 29.225l4.39 2.535 1.465-2.535 7.353-12.743 2.536-4.39-2.536-1.465-7.12-4.11-1.53-.88-4.326-2.498-4.158-2.4-3.336 5.779-2.238 3.876-5.78 10.013 5.78 3.336 9.5 5.482z"
                                        fill="#FFD217"
                                    />
                                    <path
                                        d="M6.518 6.518v3.876l2.238-3.876H6.518zM6.518 29.225h9.5l-9.5-5.482v5.482zM29.226 6.518h-7.12l7.12 4.108V6.518zM29.226 29.224V16.48l-7.353 12.743h7.353z"
                                        // fill={theme.colors.blue}
                                        className="fillBlue"
                                    />
                                    <path
                                        d="M29.767 16.628l2.733-4.735-2.733-1.576v-4.34H22.25l-1.135-.654v-2.59a2.704 2.704 0 00-5.356-.501L11.895 0 8.444 5.978H5.978v4.27L0 20.607l5.978 3.45v5.71h9.894l4.736 2.734 1.576-2.734h7.583V16.628zM28.686 7.06v2.632l-4.561-2.632h4.56zM16.79 2.734a1.622 1.622 0 013.244 0v1.965L16.79 2.827v-.093zM7.059 7.059h.76l-.76 1.318V7.059zm0 21.625V24.68l6.937 4.004H7.059zm13.15 2.338L1.478 20.21 12.29 1.478l7.745 4.47V8.14a1.622 1.622 0 01-3.244 0V4.897H15.71v3.244a2.704 2.704 0 005.407 0V6.573l9.907 5.717L20.21 31.022zm2.6-2.338l2.903-5.028 2.973-5.153v10.182h-5.876z"
                                        fill="#38395B"
                                    />
                                    <path
                                        d="M18.953 8.68h.541V7.6h-.54a.541.541 0 01-.541-.541V5.977H17.33v1.081c0 .897.726 1.623 1.622 1.623zM12.847 11.476l-.54.937 8.428 4.865.541-.937-8.429-4.865zM11.227 14.432l-.54.936 8.427 4.866.54-.936-8.427-4.866zM9.603 17.383l-.54.936 8.427 4.865.54-.936-8.427-4.865z"
                                        fill="#38395B"
                                    />
                                </svg>
                            } />
                        <MenuButton
                            onClick={toggleFont}
                            landscape={currentOrientation == 'landscape'}
                            icon={
                                currentTheme ?
                                    <svg
                                        width={35}
                                        height={32}
                                        viewBox="0 0 35 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.91 1H6.99A2.999 2.999 0 004 3.99v23.92a2.999 2.999 0 002.99 2.99h23.92a2.999 2.999 0 002.99-2.99V3.99A2.999 2.999 0 0030.91 1z"
                                            fill="#000"
                                        />
                                        <path
                                            d="M30.91.6H6.99v.8h23.92V.6zM6.99.6A3.399 3.399 0 003.6 3.99h.8A2.599 2.599 0 016.99 1.4V.6zM3.6 3.99v23.92h.8V3.99h-.8zm0 23.92a3.399 3.399 0 003.39 3.39v-.8a2.599 2.599 0 01-2.59-2.59h-.8zm3.39 3.39h23.92v-.8H6.99v.8zm23.92 0a3.399 3.399 0 003.39-3.39h-.8a2.599 2.599 0 01-2.59 2.59v.8zm3.39-3.39V3.99h-.8v23.92h.8zm0-23.92A3.399 3.399 0 0030.91.6v.8a2.599 2.599 0 012.59 2.59h.8z"
                                            fill="#000"
                                        />
                                        <mask
                                            id="prefix__bbbbb"
                                            maskUnits="userSpaceOnUse"
                                            x={0}
                                            y={1}
                                            width={25}
                                            height={29}
                                        >
                                            <path
                                                d="M9.147 1.083l15.141 5.373-8.15 22.573-15.14-5.372 8.15-22.574z"
                                                fill="#C4C4C4"
                                            />
                                        </mask>
                                        <g mask="url(#prefix__bbbbb)">
                                            <path
                                                d="M11.61 21.36h8.1l1.636 4.31h3.002L17.01 7h-2.672L7 25.67h3.001l1.609-4.31z"
                                                fill="#fff"
                                                stroke="#fff"
                                            />
                                            <path
                                                d="M15.674 10.561l2.973 7.927h-5.945l2.972-7.927z"
                                                fill="#000"
                                                stroke="#000"
                                            />
                                        </g>
                                        <path
                                            d="M21.673 22.515h5.93l1.2 3.154H31L25.627 12H23.67l-5.373 13.67h2.198l1.177-3.154z"
                                            fill="#fff"
                                            stroke="#fff"
                                        />
                                        <path
                                            d="M24.65 14.607l2.177 5.805h-4.353l2.176-5.805z"
                                            fill="#000"
                                            stroke="#000"
                                        />
                                    </svg>
                                    :
                                    <svg
                                        width={35}
                                        height={32}
                                        viewBox="0 0 35 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.91 1H6.99A2.999 2.999 0 004 3.99v23.92a2.999 2.999 0 002.99 2.99h23.92a2.999 2.999 0 002.99-2.99V3.99A2.999 2.999 0 0030.91 1z"
                                            fill="#6AC3DB"
                                        />
                                        <path
                                            d="M30.91.6H6.99v.8h23.92V.6zM6.99.6A3.399 3.399 0 003.6 3.99h.8A2.599 2.599 0 016.99 1.4V.6zM3.6 3.99v23.92h.8V3.99h-.8zm0 23.92a3.399 3.399 0 003.39 3.39v-.8a2.599 2.599 0 01-2.59-2.59h-.8zm3.39 3.39h23.92v-.8H6.99v.8zm23.92 0a3.399 3.399 0 003.39-3.39h-.8a2.599 2.599 0 01-2.59 2.59v.8zm3.39-3.39V3.99h-.8v23.92h.8zm0-23.92A3.399 3.399 0 0030.91.6v.8a2.599 2.599 0 012.59 2.59h.8z"
                                            fill="#38395B"
                                        />
                                        <mask
                                            id="prefix__aaaaaaa"
                                            maskUnits="userSpaceOnUse"
                                            x={0}
                                            y={1}
                                            width={25}
                                            height={29}
                                        >
                                            <path
                                                d="M9.147 1.083l15.141 5.373-8.15 22.573-15.14-5.372 8.15-22.574z"
                                                fill="#C4C4C4"
                                            />
                                        </mask>
                                        <g mask="url(#prefix__aaaaaaa)" stroke="#38395B">
                                            <path
                                                d="M11.61 21.36h8.1l1.636 4.31h3.002L17.01 7h-2.672L7 25.67h3.001l1.609-4.31z"
                                                fill="#fff"
                                            />
                                            <path
                                                d="M15.674 10.561l2.973 7.927h-5.945l2.972-7.927z"
                                                fill="#6AC3DB"
                                            />
                                        </g>
                                        <path
                                            d="M21.673 22.515h5.93l1.2 3.154H31L25.627 12H23.67l-5.373 13.67h2.198l1.177-3.154z"
                                            fill="#fff"
                                            stroke="#38395B"
                                        />
                                        <path
                                            d="M24.65 14.607l2.177 5.805h-4.353l2.176-5.805z"
                                            fill="#6AC3DB"
                                            stroke="#38395B"
                                        />
                                    </svg>
                            } />

                    </div>

                </>

                :
                <div
                    className={'bookMenuIconsWrapper'}
                >
                    {currentMode == 'original' ?
                        <div
                            className={'playForMe'}
                            onClick={onPlayforMePressed}
                        >
                            {playForMeMode ?
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width={6.154} height={19.882} rx={1} fill="#fff" />
                                    <rect x={13.846} width={6.154} height={19.882} rx={1} fill="#fff" />
                                </svg>
                                :
                                <svg
                                    width={17}
                                    height={22}
                                    viewBox="0 0 17 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.488 9.652a2 2 0 010 3.296L3.134 21.445C1.807 22.358 0 21.408 0 19.797V2.803c0-1.61 1.807-2.56 3.134-1.648l12.354 8.497z"
                                        fill="#fff"
                                    />
                                </svg>
                            }

                        </div>
                        :
                        <>
                            <MenuButton
                                landscape={currentOrientation == 'landscape'}
                                onClick={() => {
                                    onMenuButtonPressed('record')
                                }}
                                icon={
                                    <svg
                                        width={18}
                                        height={29}
                                        viewBox="0 0 18 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.006 0C5.569 0 2.75 2.69 2.75 6.022v7.037c0 3.333 2.818 6.022 6.255 6.022 3.436 0 6.255-2.689 6.255-6.022V6.022C15.26 2.695 12.442 0 9.006 0zm0 1.16c2.824 0 5.087 2.173 5.087 4.868v.157H10.94a.565.565 0 00-.54.588.567.567 0 00.596.532h3.102v1.12H10.946a.565.565 0 00-.54.589.567.567 0 00.596.532h3.102v1.12h-3.153a.565.565 0 00-.539.589.567.567 0 00.596.532h3.102v1.277c0 2.69-2.257 4.869-5.087 4.869-2.83 0-5.087-2.174-5.087-4.869v-1.277h3.102a.561.561 0 100-1.126H3.936v-1.12h3.102a.561.561 0 100-1.126H3.936v-1.12h3.102c.204 0 .397-.102.499-.281a.561.561 0 00-.5-.846H3.937v-.157c-.017-2.678 2.24-4.851 5.07-4.851zM.39 9.613a.495.495 0 00-.39.493v2.802c0 4.313 3.147 7.938 7.28 8.734v5.254H3.597c-1.078 0-1.968-.016-1.968.28V28h14.676v-.823c0-.297-.89-.28-1.967-.28h-3.619v-5.255c4.14-.802 7.282-4.42 7.282-8.734v-2.802a.497.497 0 00-.5-.493.493.493 0 00-.498.493v2.802c0 4.37-3.584 7.91-8.008 7.91-4.423 0-8.007-3.54-8.007-7.91v-2.802a.49.49 0 00-.165-.37.489.489 0 00-.385-.123H.39zm8.065 12.152c.181.01.363.033.55.033.187 0 .368-.022.55-.033v5.115h-1.1v-5.115z"
                                            fill="#38395B"
                                        />
                                        <path
                                            d="M9.006 1.16c2.824 0 5.086 2.174 5.086 4.869v.156H10.94a.565.565 0 00-.54.589.567.567 0 00.596.532h3.102v1.12h-3.153a.565.565 0 00-.539.588.567.567 0 00.596.533h3.102v1.12H10.95a.565.565 0 00-.539.588.567.567 0 00.595.533h3.103v1.277c0 2.689-2.258 4.868-5.087 4.868-2.83 0-5.087-2.173-5.087-4.868v-1.277h3.102a.561.561 0 100-1.126H3.936v-1.12h3.102c.204 0 .397-.102.499-.281a.561.561 0 00-.5-.846H3.937v-1.12h3.102a.561.561 0 100-1.126H3.936v-.157c-.017-2.678 2.24-4.852 5.07-4.852z"
                                            className="fillBlue"
                                        // fill={theme.colors.blue}
                                        />
                                    </svg>
                                } />

                            <MenuButton
                                landscape={currentOrientation == 'landscape'}
                                selected={drawing}
                                onClick={() => {
                                    onMenuButtonPressed('drawing')
                                }}
                                icon={
                                    <svg
                                        width={29}
                                        height={30}
                                        viewBox="0 0 29 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.819 22c-1.438.897-4.205 3.015-3.774 4.308.54 1.615 2.295 2.466 4.852 1.615 3.235-1.077 8.087-4.308 10.243-4.846C18.296 22.538 23.148 21.46 28 29"
                                            stroke="#38395B"
                                            strokeLinejoin="round"
                                        />
                                        <g clipPath="url(#prefix__clip0)" stroke="#38395B">
                                            <path
                                                d="M4.507 22.279h0l1.905-6.666h0a.173.173 0 01.29-.075l4.76 4.76s0 0 0 0c.044.045.06.108.046.167l.484.125-.484-.125a.173.173 0 01-.12.123h0l-6.666 1.905h0a.173.173 0 01-.215-.214z"
                                                fill="#F5F0EB"
                                            />
                                            <path
                                                d="M6.456 15.538l13.13-13.13 5.008 5.006-13.132 13.13.354.354-.354-.353a.172.172 0 01-.122.05.172.172 0 01-.123-.05l-4.761-4.762a.173.173 0 010-.245z"
                                                // fill={theme.colors.blue}
                                                className="fillBlue"
                                            />
                                            <path
                                                d="M23.989 8.057l2.064-2.064c.29-.29.448-.673.447-1.084v0c0-.412-.159-.796-.448-1.085L23.177.95l.812 7.108zm0 0l-5.03-5.06 2.05-2.05h0A1.518 1.518 0 0122.09.5h.001c.411 0 .794.159 1.084.448l.813 7.109z"
                                                fill="#ED6888"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="prefix__clip0">
                                                <path fill="#fff" transform="translate(4)" d="M0 0h23v23H0z" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                } />

                            <MenuButton
                                onClick={addNote}
                                landscape={currentOrientation == 'landscape'}
                                icon={
                                    <svg
                                        width={33}
                                        height={33}
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.018 29.225l4.39 2.535 1.465-2.535 7.353-12.743 2.536-4.39-2.536-1.465-7.12-4.11-1.53-.88-4.326-2.498-4.158-2.4-3.336 5.779-2.238 3.876-5.78 10.013 5.78 3.336 9.5 5.482z"
                                            fill="#FFD217"
                                        />
                                        <path
                                            d="M6.518 6.518v3.876l2.238-3.876H6.518zM6.518 29.225h9.5l-9.5-5.482v5.482zM29.226 6.518h-7.12l7.12 4.108V6.518zM29.226 29.224V16.48l-7.353 12.743h7.353z"
                                            // fill={theme.colors.blue}
                                            className="fillBlue"
                                        />
                                        <path
                                            d="M29.767 16.628l2.733-4.735-2.733-1.576v-4.34H22.25l-1.135-.654v-2.59a2.704 2.704 0 00-5.356-.501L11.895 0 8.444 5.978H5.978v4.27L0 20.607l5.978 3.45v5.71h9.894l4.736 2.734 1.576-2.734h7.583V16.628zM28.686 7.06v2.632l-4.561-2.632h4.56zM16.79 2.734a1.622 1.622 0 013.244 0v1.965L16.79 2.827v-.093zM7.059 7.059h.76l-.76 1.318V7.059zm0 21.625V24.68l6.937 4.004H7.059zm13.15 2.338L1.478 20.21 12.29 1.478l7.745 4.47V8.14a1.622 1.622 0 01-3.244 0V4.897H15.71v3.244a2.704 2.704 0 005.407 0V6.573l9.907 5.717L20.21 31.022zm2.6-2.338l2.903-5.028 2.973-5.153v10.182h-5.876z"
                                            fill="#38395B"
                                        />
                                        <path
                                            d="M18.953 8.68h.541V7.6h-.54a.541.541 0 01-.541-.541V5.977H17.33v1.081c0 .897.726 1.623 1.622 1.623zM12.847 11.476l-.54.937 8.428 4.865.541-.937-8.429-4.865zM11.227 14.432l-.54.936 8.427 4.866.54-.936-8.427-4.866zM9.603 17.383l-.54.936 8.427 4.865.54-.936-8.427-4.865z"
                                            fill="#38395B"
                                        />
                                    </svg>
                                } />
                            <MenuButton
                                onClick={toggleZoom}
                                landscape={currentOrientation == 'landscape'}
                                icon={
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4951 4.1687C23.0984 7.77751 23.6155 13.3062 21.0685 17.4762L27.2573 23.6595C28.2476 24.6498 28.2476 26.2616 27.2573 27.2518C26.2671 28.2421 24.6553 28.2421 23.665 27.2518L17.4762 21.063C13.3007 23.61 7.772 23.0929 4.1687 19.4896C-0.0562347 15.2702 -0.0562347 8.39364 4.1687 4.1687C8.39364 -0.0562348 15.2702 -0.0562348 19.4951 4.1687ZM6.41315 17.2569C9.40032 20.2496 14.2634 20.2496 17.2561 17.2569C20.2432 14.2643 20.2432 9.40117 17.2561 6.41401C14.2689 3.42134 9.40582 3.42134 6.41315 6.41401C3.42049 9.40117 3.42049 14.2643 6.41315 17.2569Z" className="fillBlue" />
                                        <path d="M21.0685 17.4762L20.7271 17.2677L20.5629 17.5365L20.7857 17.7591L21.0685 17.4762ZM19.4951 4.1687L19.7782 3.88608L19.778 3.88586L19.4951 4.1687ZM27.2573 23.6595L27.5402 23.3767L27.5401 23.3766L27.2573 23.6595ZM27.2573 27.2518L27.5402 27.5347L27.2573 27.2518ZM17.4762 21.063L17.759 20.7801L17.5365 20.5576L17.2679 20.7215L17.4762 21.063ZM4.1687 19.4896L4.45155 19.2068L4.45136 19.2066L4.1687 19.4896ZM4.1687 4.1687L3.88586 3.88586L4.1687 4.1687ZM17.2561 17.2569L17.5389 17.5398L17.5392 17.5395L17.2561 17.2569ZM6.41315 17.2569L6.69625 16.9743L6.69599 16.9741L6.41315 17.2569ZM17.2561 6.41401L16.973 6.69659L16.9732 6.69685L17.2561 6.41401ZM6.41315 6.41401L6.69573 6.69711L6.69599 6.69685L6.41315 6.41401ZM21.4098 17.6847C24.0504 13.3616 23.5155 7.62916 19.7782 3.88608L19.2121 4.45133C22.6813 7.92585 23.1806 13.2508 20.7271 17.2677L21.4098 17.6847ZM27.5401 23.3766L21.3512 17.1932L20.7857 17.7591L26.9746 23.9425L27.5401 23.3766ZM27.5402 27.5347C28.6866 26.3882 28.6866 24.5231 27.5402 23.3767L26.9745 23.9424C27.8085 24.7764 27.8085 26.135 26.9745 26.969L27.5402 27.5347ZM23.3822 27.5347C24.5286 28.6811 26.3937 28.6811 27.5402 27.5347L26.9745 26.969C26.1405 27.803 24.7819 27.803 23.9479 26.969L23.3822 27.5347ZM17.1933 21.3458L23.3822 27.5347L23.9479 26.969L17.759 20.7801L17.1933 21.3458ZM3.88586 19.7725C7.62368 23.5103 13.3562 24.0447 17.6845 21.4044L17.2679 20.7215C13.2452 23.1753 7.92033 22.6756 4.45155 19.2068L3.88586 19.7725ZM3.88586 3.88586C-0.495185 8.26691 -0.49545 15.3968 3.88605 19.7726L4.45136 19.2066C0.382981 15.1435 0.382716 8.52038 4.45155 4.45155L3.88586 3.88586ZM19.778 3.88586C15.3968 -0.495287 8.26701 -0.495287 3.88586 3.88586L4.45155 4.45155C8.52028 0.382818 15.1435 0.382818 19.2123 4.45155L19.778 3.88586ZM16.9732 16.9741C14.1366 19.8107 9.52701 19.8103 6.69625 16.9743L6.13005 17.5395C9.27363 20.6889 14.3902 20.6885 17.5389 17.5398L16.9732 16.9741ZM16.9732 6.69685C19.804 9.52766 19.8044 14.1377 16.973 16.9743L17.5392 17.5395C20.682 14.3908 20.6824 9.27468 17.5389 6.13117L16.9732 6.69685ZM6.69599 6.69685C9.53259 3.86025 14.1422 3.86063 16.973 6.69659L17.5392 6.13143C14.3956 2.98206 9.27904 2.98243 6.13031 6.13117L6.69599 6.69685ZM6.69599 16.9741C3.8594 14.1375 3.85977 9.52786 6.69573 6.69711L6.13057 6.13091C2.9812 9.27448 2.98158 14.391 6.13031 17.5398L6.69599 16.9741Z" fill="#38395B" />
                                        <path d="M13.1027 10.4572H16.3704V12.9492H13.1027V16.217H10.6106V12.9492H7.34839V10.4572H10.6161V7.18945H13.1082V10.4572H13.1027Z" fill="#38395B" />
                                    </svg>

                                } />
                            {/* <MenuButton
                            landscape={currentOrientation == 'landscape'}
                            icon={
                                <Svg
                                    width={29}
                                    height={29}
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.392 24.642l-.098.145c-1.805 2.385-3.432 2.923-6.466 2.923H7.127v-3.96c-3.18-.284-5.672-2.933-5.672-6.158V7.474c0-3.415 2.793-6.184 6.239-6.184h13.612c3.446 0 6.24 2.769 6.24 6.184v10.118c0 3.415-2.794 6.183-6.24 6.183h-5.389l-.525.867z"
                                        // fill={theme.colors.blue}
                                        className="fillBlue"
                                        stroke="#38395B"
                                    />
                                    <Path
                                        d="M6 7.002v1.197l17.407-.001V7L6 7.002zM6 11.735v1.197h17.406v-1.197H6zM6 16.462v1.196h17.406v-1.196H6z"
                                        fill="#38395B"
                                    />
                                </Svg>
                            } /> */}
                        </>
                    }
                </div>
            }
        </motion.div>
    )
}
