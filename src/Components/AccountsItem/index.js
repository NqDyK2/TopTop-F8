import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
const cx = classNames.bind(styles);
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_300x300.webp?x-expires=1654516800&x-signature=YyJvB2rXCmIRwXFxUuQdFYdjZz4%3D"
                className={cx('avatar')}
                alt="......"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Mixigaming</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Độ Phùng</span>
            </div>
        </div>
    );
}

export default AccountsItem;
