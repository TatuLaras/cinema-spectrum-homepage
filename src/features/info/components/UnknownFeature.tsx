import FeatureElement from '../../../components/FeatureElement';

import '../styles/unknown_feature.scss';

import screenshot3 from '../../../assets/screenshots/screenshot3.png';

type Props = {};

export default function UnknownFeature({}: Props) {
    return (
        <FeatureElement
            title='Resolve parsing errors easily'
            className='unknown-feature'
        >
            <img src={screenshot3} alt="" />
        </FeatureElement>
    );
}
