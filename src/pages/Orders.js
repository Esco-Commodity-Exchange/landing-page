import React, { Component } from 'react';
import SideBar from "../components/SideBar";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'open',
            openOrders: [
                { id: 1, symbol: 'BTC/USD', type: 'Buy', date: '2023.10.27', lots: '0.50', openingPrice: '34,500.00', closingPrice: '------', profit: '+350.00', isProfit: true },
                { id: 2, symbol: 'ETH/USD', type: 'Sell', date: '2023.10.26', lots: '2.00', openingPrice: '1,850.00', closingPrice: '------', profit: '+60.00', isProfit: true },
                { id: 3, symbol: 'XAU/USD', type: 'Buy', date: '2023.10.25', lots: '0.10', openingPrice: '1,980.50', closingPrice: '------', profit: '-55.00', isProfit: false },
            ],
            completedOrders: [
                { id: 101, symbol: 'BTC/USD', type: 'Buy', date: '2023.10.21', lots: '0.80', openingPrice: '32,100.00', closingPrice: '32,450.00', profit: '+280.00', isProfit: true },
                { id: 102, symbol: 'Gold/Spot', type: 'Buy', date: '2023.10.20', lots: '2.50', openingPrice: '1,950.00', closingPrice: '1,972.00', profit: '+55.00', isProfit: true },
            ],
            cancelledOrders: [
                { id: 201, symbol: 'SILVER/USD', type: 'Buy', date: '2023.10.24', lots: '15.00', openingPrice: '22.80', closingPrice: '------', profit: '0.00', isProfit: null }
            ],
            targetOrderIdToCancel: null
        };
    }

    handleTabSwitch = (tab) => {
        this.setState({ activeTab: tab });
    };

    triggerCancelOrder = (id) => {
        this.setState({ targetOrderIdToCancel: id });
        const modal = new window.bootstrap.Modal(document.getElementById('cancelOrderConfirmModal'));
        modal.show();
    };

    confirmCancel = () => {
        const { targetOrderIdToCancel, openOrders, cancelledOrders } = this.state;
        const orderIdx = openOrders.findIndex(o => o.id === targetOrderIdToCancel);

        if (orderIdx > -1) {
            const ord = openOrders[orderIdx];
            const newOpen = openOrders.filter(o => o.id !== targetOrderIdToCancel);
            const newCancelled = [{ ...ord, closingPrice: '------', profit: '0.00', isProfit: null }, ...cancelledOrders];

            this.setState({ openOrders: newOpen, cancelledOrders: newCancelled, targetOrderIdToCancel: null });
            window.bootstrap.Modal.getInstance(document.getElementById('cancelOrderConfirmModal')).hide();
        }
    };

    render() {
        const { activeTab, openOrders, completedOrders, cancelledOrders } = this.state;
        const items = activeTab === 'open' ? openOrders : (activeTab === 'completed' ? completedOrders : cancelledOrders);

        return (
            <>
                <SideBar title={"Orders and Trades"} />
                <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ paddingTop: "calc(var(--header-height) + 1.5rem)" }}>
                    <section id="order-content-space" className="mt-2">
                        <div className="mb-4">
                            <h2 className="font-display fw-bold text-esco-primary mb-1" style={{ fontSize: "1.8rem", color: "#022c1e", letterSpacing: "-0.015em" }}>Order History</h2>
                            <p className="text-muted small mb-0" style={{ fontSize: "0.88rem", maxWidth: "680px", lineHeight: "1.5" }}>
                                View and manage your completed, pending, and cancelled orders across commodity and digital asset markets.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="order-filter-pill-bar mb-4">
                            {['open', 'completed', 'cancelled'].map(tab => (
                                <button key={tab} className={`order-filter-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => this.handleTabSwitch(tab)}>
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Desktop Table */}
                        <div className="order-table-card d-none d-md-block p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0 order-history-table">
                                    <thead>
                                    <tr className="border-bottom text-muted">
                                        <th scope="col" style={{ paddingLeft: "24px" }}>Symbol</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Lots</th>
                                        <th scope="col">Opening price</th>
                                        <th scope="col">Closing price</th>
                                        <th scope="col">Profit TAKA</th>
                                        <th scope="col" className="text-end" style={{ paddingRight: "24px" }}>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {items.length > 0 ? items.map(item => (
                                        <tr key={item.id}>
                                            <td style={{ paddingLeft: "24px", fontWeight: 600 }}>{item.symbol}</td>
                                            <td><span className={`badge ${item.type === 'Buy' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>{item.type}</span></td>
                                            <td>{item.date}</td>
                                            <td>{item.lots}</td>
                                            <td>৳ {item.openingPrice}</td>
                                            <td>{item.closingPrice === '------' ? '------' : `৳ ${item.closingPrice}`}</td>
                                            <td className={item.isProfit === true ? 'text-success fw-bold' : (item.isProfit === false ? 'text-danger fw-bold' : '')}>{item.profit}</td>
                                            <td className="text-end" style={{ paddingRight: "24px" }}>
                                                {activeTab === 'open' ? <button className="btn btn-outline-danger btn-sm" onClick={() => this.triggerCancelOrder(item.id)}>Cancel</button> : <span className="text-muted small">{activeTab === 'completed' ? 'Settle Cleared' : 'Cancelled'}</span>}
                                            </td>
                                        </tr>
                                    )) : <tr><td colSpan="8" className="text-center py-4 text-secondary">No {activeTab} trade entries.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile Cards */}
                        <div className="d-flex flex-column gap-3 d-md-none">
                            {items.map(item => (
                                <div key={item.id} className="order-mobile-card border p-3 rounded-3 bg-white">
                                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                        <strong>{item.symbol}</strong>
                                        <span className={item.type === 'Buy' ? 'text-success' : 'text-danger'}>{item.type}</span>
                                    </div>
                                    <div>Date: {item.date}</div>
                                    <div>Profit: <span className={item.isProfit === true ? 'text-success' : 'text-danger'}>{item.profit}</span></div>
                                    {activeTab === 'open' && <button className="btn btn-danger w-100 mt-2" onClick={() => this.triggerCancelOrder(item.id)}>Cancel Order</button>}
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Modal */}
                <div className="modal fade" id="cancelOrderConfirmModal" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content text-center p-4">
                            <h5>Cancel Order</h5>
                            <p>Are you sure you want to cancel this order?</p>
                            <div className="d-flex gap-2">
                                <button className="btn btn-light flex-fill" data-bs-dismiss="modal">Keep</button>
                                <button className="btn btn-danger flex-fill" onClick={this.confirmCancel}>Cancel Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Orders;