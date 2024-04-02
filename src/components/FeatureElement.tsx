import { motion } from 'framer-motion';
import '../styles/feature_element.scss';

type Props = {
    children: JSX.Element;
    title?: string | null;
    className?: string;
};

export default function FeatureElement({
    children,
    title = null,
    className = '',
}: Props) {
    return (
        <motion.div
            className={`panel feature-element ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                duration: 1,
            }}
        >
            <div className='title'>{title}</div>
            <div className='content'>{children}</div>
        </motion.div>
    );
}
