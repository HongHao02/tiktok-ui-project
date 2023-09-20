import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ReferenceArea.module.scss';
import { ImageLable } from '~/components/Image';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const refIntroductions = [
    {
        title: 'About',
        href: 'https://www.tiktok.com/about?lang=en',
    },
    {
        title: 'Newsroom',
        href: 'https://newsroom.tiktok.com/en-us/',
    },
    {
        title: 'Contact',
        href: 'https://www.tiktok.com/about/contact?lang=en',
    },
    {
        title: 'Careers',
        href: 'https://careers.tiktok.com/',
    },
];
const refFeatures = [
    {
        title: 'Tiktok for Good',
        href: 'https://www.tiktok.com/about?lang=en',
    },
    {
        title: 'Advertise',
        href: 'https://newsroom.tiktok.com/en-us/',
    },
    {
        title: 'Deverlopers',
        href: 'https://www.tiktok.com/about/contact?lang=en',
    },
    {
        title: 'Transparency',
        href: 'https://careers.tiktok.com/',
    },
    {
        title: 'Tiktok Rewards',
        href: 'https://www.tiktok.com/about/contact?lang=en',
    },
    {
        title: 'Tiktok Embeds',
        href: 'https://careers.tiktok.com/',
    },
    
];
const refHelp = [
    {
        title: 'Help',
        href: 'https://www.tiktok.com/about?lang=en',
    },
    {
        title: 'Safety',
        href: 'https://newsroom.tiktok.com/en-us/',
    },
    {
        title: 'Terms',
        href: 'https://www.tiktok.com/about/contact?lang=en',
    },
    {
        title: 'Privacy',
        href: 'https://careers.tiktok.com/',
    },
    {
        title: 'Creator Portal',
        href: 'https://www.tiktok.com/about/contact?lang=en',
    },
];
const refComunication = [
    {
        title: 'Community Guidelines',
        href: 'https://www.tiktok.com/about?lang=en',
    },
];

const renderRef = (refArray) => {
    if (refArray.length > 0) {
        return refArray.map((ref, index) => (
            <a href={ref.href} key={index} target='_blank' rel="noreferrer">
                {ref.title}
            </a>
        ));
    }
};

function ReferenceArea() {
    return (
        <div className={cx('wrapper')}>
            <ImageLable
                href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v2&utm_source=tiktok_webapp_main"
                icon={<FontAwesomeIcon icon={faClapperboard} />}
                lable="Create effects"
            />
            <div className={cx('references')}>
                {console.log(refIntroductions)}
                <div>{renderRef(refIntroductions)}</div>
                <div>{renderRef(refFeatures)}</div>
                <div>{renderRef(refHelp)}</div>
                <div>{renderRef(refComunication)}</div>
                <span>© 2023 TikTok - clone by HongHao02</span>
            </div>
        </div>
    );
}

ReferenceArea.propTypes={
    
}
export default ReferenceArea;
