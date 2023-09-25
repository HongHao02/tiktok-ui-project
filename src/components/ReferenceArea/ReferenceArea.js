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
        href: 'https://www.tiktok.com/for-good',
    },
    {
        title: 'Advertise',
        href: 'https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1',
    },
    {
        title: 'Deverlopers',
        href: 'https://developers.tiktok.com/?refer=tiktok_web',
    },
    {
        title: 'Transparency',
        href: 'https://www.tiktok.com/transparency/vi-vn/',
    },
    {
        title: 'Tiktok Rewards',
        href: 'https://www.tiktok.com/tiktok-rewards/eligibility/',
    },
    {
        title: 'Tiktok Embeds',
        href: 'https://www.tiktok.com/embed',
    },
    
];
const refHelp = [
    {
        title: 'Help',
        href: 'https://support.tiktok.com/en',
    },
    {
        title: 'Safety',
        href: 'https://www.tiktok.com/safety/en/',
    },
    {
        title: 'Terms',
        href: 'https://www.tiktok.com/legal/page/row/terms-of-service/en',
    },
    {
        title: 'Privacy',
        href: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    },
    {
        title: 'Creator Portal',
        href: 'https://www.tiktok.com/creators/creator-portal/en-us/',
    },
];
const refComunication = [
    {
        title: 'Community Guidelines',
        href: 'https://www.tiktok.com/community-guidelines/en/',
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
