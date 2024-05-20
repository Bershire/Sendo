import React, { useState } from 'react';

const Index = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const locations = [
        { label: "Hồ Chí Minh", value: "Hồ Chí Minh" },
        { label: "Hà Nội", value: "Hà Nội" },
        { label: "Hưng Yên", value: "Hưng Yên" },
        { label: "Lâm Đồng", value: "Lâm Đồng" },
        { label: "Đồng Nai", value: "Đồng Nai" },
        { label: "Lào Cai", value: "Lào Cai" },
        { label: "Bình Dương", value: "Bình Dương" },
        { label: "Khánh Hòa", value: "Khánh Hòa" },
        { label: "Thái Bình", value: "Thái Bình" },
        { label: "Nam Định", value: "Nam Định" },
    ];

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <main id='main'>
            <div class="d7ed-IB_g3V d7ed-NsreHf _36fd-qAyq2p">
                <div class="d7ed-IB_g3V">
                    <div className="d7ed-fMmmQd d7ed-oqSJlx" style={{ padding: '4px' }}>
                        <nav className="d7ed-Rpk1Hp">
                            <ol className="d7ed-rtSC1u">
                                <li className="d7ed-SnBLWh">
                                    <a type="inherit" href="" className="">Sendo.vn</a>
                                </li>
                                <li className="d7ed-iZl608">/</li>
                                <li className="d7ed-SnBLWh">
                                    <span className="d7ed-KXpuoS d7ed-bjQW4F d7ed-JAhcuC">Kết quả tìm kiếm</span>
                                </li>
                            </ol>
                        </nav>
                        <div className="_36fd-p7_rFv d7ed-fdSIZS d7ed-UkcyG6">
                            <span className="d7ed-kUYEit d7ed-AHa8cD d7ed-mzOLVa">laptop mới nhất</span>
                            <span className="d7ed-on_UTO d7ed-KXpuoS d7ed-bjQW4F d7ed-mzOLVa" style={{ marginLeft: '2px' }}>Tìm thấy hơn 10.000 sản phẩm</span>
                        </div>
                    </div>
                    <div class="_36fd-hjrAHG d7ed-fdSIZS">
                        <div className="_36fd-drkrUX d7ed-d4keTB d7ed-OoK3wU">
                            <div className="_9bb2-BT20Ke d7ed-OoK3wU">
                                <div className="d7ed-i7WAy7 d7ed-bJTriY d7ed-hPrRWD d7ed-GvYkJq d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                    <div className="_9bb2-SMN5G4 d7ed-fdSIZS d7ed-w9YXDo d7ed-UkcyG6">
                                        <span className="d7ed-KXpuoS d7ed-AHa8cD d7ed-mzOLVa">Địa điểm</span>
                                        <button
                                            className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ d7ed-joBgy5 d7ed-DbNJxd"
                                            onClick={toggleExpand}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                <path fill="#6F787E" fillRule="nonzero" d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="d7ed-RlwCwG _9bb2-Izvbhy" style={{ marginTop: '2px' }}>
                                        <div className="d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                            {locations.slice(0, isExpanded ? locations.length : 4).map((item, index) => (
                                                <div key={index} className="d7ed-UvT0ls d7ed-jQn0Cs d7ed-FqryJS d7ed-_Q8WLO _9bb2-ftY7pi d7ed-fdSIZS d7ed-UkcyG6" style={{ padding: '1px 2px 1px 3px' }}>
                                                    <label className="d7ed-YhjBId" role="checkbox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-ong_OF">
                                                            <path d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z" fill="#6F787E" fillRule="nonzero"></path>
                                                        </svg>
                                                        <span className="d7ed-udnSps">{item.label}</span>
                                                        <input readOnly type="checkbox" name="shop_warehouse_city_id" className="d7ed-hvI5CB" value={item.value} />
                                                    </label>
                                                </div>
                                            ))}
                                            <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ _9bb2-MB4Vmw d7ed-joBgy5" onClick={toggleExpand}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                    <path fill="#6F787E" fillRule="nonzero" d = {isExpanded ? 'M22 11v2H2v-2z' : 'M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z'} ></path>
                                                </svg>
                                                <span className="d7ed-dZeDhd d7ed-eDzKvk">{isExpanded ? 'Thu gọn' : 'Mở rộng'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="d7ed-nCirxX d7ed-gXVeIS" />
                                <div className="d7ed-i7WAy7 d7ed-bJTriY d7ed-hPrRWD d7ed-GvYkJq d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                    <div className="_9bb2-SMN5G4 d7ed-fdSIZS d7ed-w9YXDo d7ed-UkcyG6">
                                        <span className="d7ed-KXpuoS d7ed-AHa8cD d7ed-mzOLVa">Phương thức vận chuyển</span>
                                        <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ d7ed-joBgy5 d7ed-DbNJxd">
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                <path fill="#6F787E" fillRule="nonzero" d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="d7ed-RlwCwG _9bb2-Izvbhy" style={{ marginTop: '2px' }}>
                                        <div className="d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                            {[
                                                { label: "Hỏa tốc", value: "Hỏa tốc" },
                                                { label: "Nhanh", value: "Nhanh" },
                                                { label: "Tiêu chuẩn", value: "Tiêu chuẩn" },
                                            ].map((item, index) => (
                                                <div key={index} className="d7ed-UvT0ls d7ed-jQn0Cs d7ed-FqryJS d7ed-_Q8WLO _9bb2-ftY7pi d7ed-fdSIZS d7ed-UkcyG6" style={{ padding: '1px 2px 1px 3px' }}>
                                                    <label className="d7ed-YhjBId" role="checkbox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-ong_OF">
                                                            <path d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z" fill="#6F787E" fillRule="nonzero"></path>
                                                        </svg>
                                                        <span className="d7ed-udnSps">{item.label}</span>
                                                        <input readOnly type="checkbox" name="is_using_instant" className="d7ed-hvI5CB" value={item.value} />
                                                    </label>
                                                </div>
                                            ))}
                                            <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ _9bb2-MB4Vmw d7ed-joBgy5">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                    <path fill="#6F787E" fillRule="nonzero" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></path>
                                                </svg>
                                                <span className="d7ed-dZeDhd d7ed-eDzKvk">Xem thêm</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="d7ed-nCirxX d7ed-gXVeIS" />
                                <div className="d7ed-i7WAy7 d7ed-bJTriY d7ed-hPrRWD d7ed-GvYkJq d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                    <div className="_9bb2-SMN5G4 d7ed-fdSIZS d7ed-w9YXDo d7ed-UkcyG6">
                                        <span className="d7ed-KXpuoS d7ed-AHa8cD d7ed-mzOLVa">Phương thức thanh toán</span>
                                        <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ d7ed-joBgy5 d7ed-DbNJxd">
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                <path fill="#6F787E" fillRule="nonzero" d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="d7ed-RlwCwG _9bb2-Izvbhy" style={{ marginTop: '2px' }}>
                                        <div className="d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                            {[
                                                { label: "Thanh toán khi nhận hàng", value: "Thanh toán khi nhận hàng" },
                                                { label: "Chuyển khoản ngân hàng", value: "Chuyển khoản ngân hàng" },
                                                { label: "Thẻ tín dụng / ghi nợ", value: "Thẻ tín dụng / ghi nợ" },
                                            ].map((item, index) => (
                                                <div key={index} className="d7ed-UvT0ls d7ed-jQn0Cs d7ed-FqryJS d7ed-_Q8WLO _9bb2-ftY7pi d7ed-fdSIZS d7ed-UkcyG6" style={{ padding: '1px 2px 1px 3px' }}>
                                                    <label className="d7ed-YhjBId" role="checkbox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-ong_OF">
                                                            <path d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z" fill="#6F787E" fillRule="nonzero"></path>
                                                        </svg>
                                                        <span className="d7ed-udnSps">{item.label}</span>
                                                        <input readOnly type="checkbox" name="is_using_payment" className="d7ed-hvI5CB" value={item.value} />
                                                    </label>
                                                </div>
                                            ))}
                                            <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ _9bb2-MB4Vmw d7ed-joBgy5">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                    <path fill="#6F787E" fillRule="nonzero" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></path>
                                                </svg>
                                                <span className="d7ed-dZeDhd d7ed-eDzKvk">Xem thêm</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="d7ed-nCirxX d7ed-gXVeIS" />
                                <div className="d7ed-i7WAy7 d7ed-bJTriY d7ed-hPrRWD d7ed-GvYkJq d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                    <div className="_9bb2-SMN5G4 d7ed-fdSIZS d7ed-w9YXDo d7ed-UkcyG6">
                                        <span className="d7ed-KXpuoS d7ed-AHa8cD d7ed-mzOLVa">Trạng thái đơn hàng</span>
                                        <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ d7ed-joBgy5 d7ed-DbNJxd">
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                <path fill="#6F787E" fillRule="nonzero" d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="d7ed-RlwCwG _9bb2-Izvbhy" style={{ marginTop: '2px' }}>
                                        <div className="d7ed-fdSIZS d7ed-OoK3wU d7ed-Bwn8O5">
                                            {[
                                                { label: "Chờ xác nhận", value: "Chờ xác nhận" },
                                                { label: "Đang giao", value: "Đang giao" },
                                                { label: "Đã giao", value: "Đã giao" },
                                            ].map((item, index) => (
                                                <div key={index} className="d7ed-UvT0ls d7ed-jQn0Cs d7ed-FqryJS d7ed-_Q8WLO _9bb2-ftY7pi d7ed-fdSIZS d7ed-UkcyG6" style={{ padding: '1px 2px 1px 3px' }}>
                                                    <label className="d7ed-YhjBId" role="checkbox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-ong_OF">
                                                            <path d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z" fill="#6F787E" fillRule="nonzero"></path>
                                                        </svg>
                                                        <span className="d7ed-udnSps">{item.label}</span>
                                                        <input readOnly type="checkbox" name="is_using_order_status" className="d7ed-hvI5CB" value={item.value} />
                                                    </label>
                                                </div>
                                            ))}
                                            <button className="d7ed-s0YDb1 d7ed-jQXTxb d7ed-AREzVq d7ed-hulWpQ _9bb2-MB4Vmw d7ed-joBgy5">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                                                    <path fill="#6F787E" fillRule="nonzero" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></path>
                                                </svg>
                                                <span className="d7ed-dZeDhd d7ed-eDzKvk">Xem thêm</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Index;