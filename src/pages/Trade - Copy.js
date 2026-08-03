import React, { Component, createRef } from 'react';
import { createChart } from 'lightweight-charts';
import { RSI, MACD, EMA } from 'technicalindicators';

class Trade extends Component {
    constructor(props) {
        super(props);
        this.chartContainerRef = createRef();
        this.tooltipRef = createRef();
        this.chart = null;
        // টাইমফ্রেম সিলেক্ট করার জন্য স্টেট
        this.state = { timeframe: '1h' };
    }

    getChartData = (tf) => {
        const fullData = [
            { time: '2026-07-01', open: 8900, high: 9020, low: 8780, close: 8950, volume: 1900 },
            { time: '2026-07-02', open: 8950, high: 9100, low: 8900, close: 9060, volume: 1700 },
            { time: '2026-07-03', open: 8910, high: 9020, low: 8780, close: 8920, volume: 9900 },
            { time: '2026-07-04', open: 8920, high: 9100, low: 8900, close: 9030, volume: 1600 },
            { time: '2026-07-05', open: 8940, high: 9020, low: 8780, close: 8990, volume: 5900 },
            { time: '2026-07-06', open: 8990, high: 9100, low: 8800, close: 9280, volume: 1500 },
            { time: '2026-07-07', open: 9280, high: 9350, low: 9200, close: 9300, volume: 1900 },
            { time: '2026-07-08', open: 9300, high: 9400, low: 9250, close: 9380, volume: 1540 },
            { time: '2026-07-09', open: 9380, high: 9450, low: 9300, close: 9320, volume: 1200 },
            { time: '2026-07-10', open: 9320, high: 9400, low: 9150, close: 9180, volume: 1600 },
            { time: '2026-07-11', open: 9180, high: 9250, low: 9100, close: 9220, volume: 9900 },
            { time: '2026-07-12', open: 9220, high: 9300, low: 9150, close: 9280, volume: 6900 },
            { time: '2026-07-13', open: 9280, high: 9350, low: 9200, close: 9250, volume: 1900 },
            { time: '2026-07-14', open: 9250, high: 9300, low: 9100, close: 9120, volume: 1000 },
            { time: '2026-07-15', open: 9120, high: 9200, low: 9050, close: 9180, volume: 1400 },
            { time: '2026-07-16', open: 9180, high: 9250, low: 9100, close: 9210, volume: 1900 },
            { time: '2026-07-17', open: 9210, high: 9300, low: 9150, close: 9280, volume: 1800 },
            { time: '2026-07-18', open: 9280, high: 9350, low: 9200, close: 9320, volume: 4900 },
            { time: '2026-07-19', open: 9320, high: 9400, low: 9250, close: 9380, volume: 6900 },
            { time: '2026-07-20', open: 9380, high: 9500, low: 9300, close: 9450, volume: 9700 }
        ];

        // টাইমফ্রেম অনুযায়ী ডেটা ফিল্টার করার লজিক
        switch (tf) {
            case '1m':  return fullData.slice(-2);   // সবচেয়ে ছোট ভিউ
            case '5m':  return fullData.slice(-5);
            case '15m': return fullData.slice(-8);
            case '1h':  return fullData.slice(-12);
            case '4h':  return fullData.slice(-16);
            case '1d':  return fullData;            // পুরো ডেটা
            default:    return fullData;
        }
    }

    componentDidMount() { this.initChart(); }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.timeframe !== this.state.timeframe) {
            this.initChart();
        }
    }

    initChart = () => {
        // নতুন চার্ট তৈরির আগে পুরনো চার্টটি ডিলিট করুন
        if (this.chart) {
            this.chart.remove();
        }

        const data = this.getChartData(this.state.timeframe);
        const closes = data.map(d => d.close);

        this.chart = createChart(this.chartContainerRef.current, {
            width: 600, height: 450,
            crosshair: { mode: 1 },
            timeScale: {
                visible: true,
                timeVisible: true,
                secondsVisible: false,
                barSpacing: 20,
            },
        });

        this.mainSeries = this.chart.addCandlestickSeries({ title: 'Price' });
        this.mainSeries.setData(data);

        // ইন্ডিকেটরসমূহ আগের মতোই থাকবে
        this.emaSeries = this.chart.addLineSeries({ title: 'EMA 9', color: '#2962FF', lineWidth: 2 });
        this.emaSeries.setData(EMA.calculate({ period: 9, values: closes }).map((v, i) => ({ time: data[i+8].time, value: v })));

        this.rsiSeries = this.chart.addLineSeries({ title: 'RSI 7', priceScaleId: 'rsi', color: '#ff9800' });
        this.rsiSeries.setData(RSI.calculate({ period: 7, values: closes }).map((v, i) => ({ time: data[i+7].time, value: v })));

        this.macdSeries = this.chart.addHistogramSeries({ title: 'MACD', priceScaleId: 'macd', color: '#26a69a' });
        this.macdSeries.setData(MACD.calculate({ fastPeriod: 5, slowPeriod: 10, signalPeriod: 3, values: closes }).map((v, i) => ({ time: data[i+9].time, value: v.MACD })));

        this.volumeSeries = this.chart.addHistogramSeries({ title: 'Volume', priceScaleId: 'volume', color: '#716aca' });
        this.volumeSeries.setData(data.map(d => ({ time: d.time, value: d.volume })));

        // স্কেল কনফিগারেশন
        this.chart.priceScale('rsi').applyOptions({ scaleMargins: { top: 0.5, bottom: 0.35 } });
        this.chart.priceScale('macd').applyOptions({ scaleMargins: { top: 0.65, bottom: 0.2 } });
        this.chart.priceScale('volume').applyOptions({ scaleMargins: { top: 0.8, bottom: 0.05 } });

        // মাউস মুভ ইভেন্ট
        this.chart.subscribeCrosshairMove((param) => {
            if (!this.tooltipRef.current) return;
            if (!param.point || !param.seriesData || param.seriesData.size === 0) {
                this.tooltipRef.current.style.display = 'none';
                return;
            }

            this.tooltipRef.current.style.display = 'block';
            const dataMap = param.seriesData;
            const price = dataMap.get(this.mainSeries);
            const ema = dataMap.get(this.emaSeries);
            const rsi = dataMap.get(this.rsiSeries);
            const macd = dataMap.get(this.macdSeries);

            this.tooltipRef.current.innerHTML = `
                <div style="font-size: 12px; font-weight: bold;">
                    Price: ${price?.close?.toFixed(2) || 'N/A'}<br/>
                    EMA: ${ema?.value?.toFixed(2) || 'N/A'}<br/>
                    RSI: ${rsi?.value?.toFixed(2) || 'N/A'}<br/>
                    MACD: ${macd?.value?.toFixed(2) || 'N/A'}
                </div>
            `;
            this.tooltipRef.current.style.left = (param.point.x + 20) + 'px';
            this.tooltipRef.current.style.top = (param.point.y + 20) + 'px';
        });
    }
    render() {
        return (
            <div style={{ position: 'relative', width: '600px', marginTop: 50 }}>
                {/* টাইমফ্রেম সিলেক্টর বাটনসমূহ */}
                <div style={{ marginBottom: '10px' }}>
                    {['1m', '5m', '15m', '1h', '4h', '1d'].map(tf => (
                        <button
                            key={tf}
                            onClick={() => this.setState({ timeframe: tf })}
                            style={{
                                marginRight: '5px',
                                padding: '5px 10px',
                                background: this.state.timeframe === tf ? '#e0e0e0' : '#fff',
                                cursor: 'pointer'
                            }}
                        >
                            {tf}
                        </button>
                    ))}
                    <span style={{ marginLeft: '10px' }}>| Indicators</span>
                </div>

                <div ref={this.chartContainerRef} />
                <div ref={this.tooltipRef} style={{
                    position: 'absolute', display: 'none', zIndex: 1000,
                    background: 'rgba(0,0,0,0.8)', color: '#fff', padding: '10px',
                    borderRadius: '5px', pointerEvents: 'none'
                }}></div>
            </div>
        );
    }
}
export default Trade;