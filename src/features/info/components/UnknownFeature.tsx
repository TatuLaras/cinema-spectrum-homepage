import FeatureElement from '../../../components/FeatureElement';

import screenshot3 from '../../../assets/screenshots/screenshot3.png';

type Props = {};

export default function UnknownFeature({}: Props) {
    return (
        <FeatureElement
            title="Resolve parsing errors easily"
            className="split-feature"
        >
            <img src={screenshot3} alt="" />
        </FeatureElement>
    );
}
