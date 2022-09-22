import React, { useEffect, useRef, useState } from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import CustomButton from '../../components//CustomButton'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
export default function LevelHomeDescription({ Title, Description, language, nextLevel }) {
    const { t, i18n } = useTranslation([], { useSuspense: false });
    const [open, setOpen] = React.useState(false)

    return (
        <div style={{

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Modal className={` levelmodal ${language == 'ar' ? 'rtlDir' : 'ltrDir'}`}
                open={open}
                mountNode={document.querySelector('.themewrapper')}
                size="tiny"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={<div className="levelButton">

                    <div className="smallText blueText"> {t('mainSlides.level.level', { lng: language })} {Title}</div>


                    <div className={` ${language == 'ar' ? 'rotate-arrow' : ''} right-arrow icon-right-arrow  viewArrow`} />
                </div>
                }
            >
                <Modal.Header> <div className={`sectionTitle yellowTextlevel ${language == 'ar' ? 'rtlDir' : 'ltrDir'}`}>
                    {t('mainSlides.level.level', { lng: language })} {Title}

                </div>
                    <Modal.Actions >
                        <Button class="ui icon button" onClick={() => setOpen(false)} primary>
                            <i class="bluek large close icon"></i>
                        </Button>
                    </Modal.Actions>
                </Modal.Header>

                <Modal.Content scrolling>

                    <Modal.Description className={`${language == 'ar' ? 'rtlDir' : 'ltrDir'}`}>
                        {Description?.split("\n").map((i, key) => {
                            return <div key={key}>{i}</div>;
                        })}
                    </Modal.Description>
                </Modal.Content>

            </Modal>

        </div >
    )
}