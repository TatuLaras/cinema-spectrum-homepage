// import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import '../styles/feature_element.scss';
import { inView } from '../utils/inView';

type Props = {
    children: JSX.Element;
    title?: string | null;
    className?: string;
    ref?: MutableRefObject<HTMLDivElement | null>;
};

export default function FeatureElement({
    children,
    title = null,
    className = '',
}: Props) {
    const [featureInView, setFeatureInView] = useState(false);
    const featureRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    function onScroll() {
        setFeatureInView(inView(featureRef.current!, 50, 'visible'));
    }

    return (
        <div
            className={`panel feature-element ${className} ${featureInView ? 'in-view' : ''}`}
            ref={featureRef}
        >
            <div className="title">{title}</div>
            <div className="content">{children}</div>
        </div>
    );
}
