import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Account.scss';
import { LoadingAdvance } from '../common/Loading/Loading';
import { formatVND, clearCookie } from '../../utils';
import { Button, Tag } from 'antd';
import { clearAuth } from '../../redux/actions/auth/actions';
import { clearMyCombo } from '../../redux/actions/my-combos/actions'
import { clearHistory } from '../../redux/actions/history/actions'
import userDefault from '../../asset/img/usersvg.svg'
import { fetchRanks } from '../../redux/actions/rank-actions/action';
import { cookieName } from '../../constant';
import { clearWallet } from '../../redux/actions/wallet/actions';
import { clearNotification } from '../../redux/actions/notification/actions';
const Account = () => {
    const dispatch = useDispatch();
    const { items: ranks } = useSelector(state => state.rank)
    useEffect(() => {
        if (ranks.length === 0) {
            dispatch(fetchRanks())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { auth: { user }, wallet } = useSelector((state) => state);
    const myRank = useMemo(() => {
        if (user !== null && ranks.length > 0) {
            let rank = ranks.find(item => user.Rank === item.RankValue)
            return rank.RankName
        }
        return <Tag color="blue">loading...</Tag>
    }, [user, ranks])
    const handleLogout = () => {
        clearCookie(cookieName)
        dispatch(clearHistory())
        dispatch(clearNotification())
        dispatch(clearAuth())
        dispatch(clearMyCombo())
        dispatch(clearWallet())

    }
    const [imgErorr, setImgErorr] = useState(false)

    const addDefaultSrc = (e) => {
        setImgErorr(true)
    }
    return (
        <LoadingAdvance>
            <div className="account">
                <div className="account__header d-flex-center">
                    <div className="img-wrapper d-flex-center">
                        {imgErorr ? <img src={userDefault} alt="user" /> :
                            <img onError={addDefaultSrc} src={user.image+""} alt="user" />}
                    </div>
                    <div className="user-name">{user.fullName}</div>
                </div>
                <div className="account__body">
                    <div>
                        <span>Số dư: </span>
                        <span>{formatVND(wallet.electronic)} VNĐ</span>
                    </div>
                    <div>
                        <span>Điểm tích lũy: </span>
                        <span>{formatVND(user.Score)}</span>
                    </div>
                    <div>
                        <span>Hạng: </span>
                        <span>{myRank}</span>
                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span>Số điện thoại: </span>
                        <span>{user.phone}</span>
                    </div>
                    <div className="log-out d-flex-center">
                        <Button onClick={handleLogout}>Đăng xuất</Button>
                    </div>
                </div>
            </div>
        </LoadingAdvance>
    );
};

export default Account;
