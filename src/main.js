import render_1_1 from './components/component_1_1.js';
import render_1_2 from './components/component_1_2.js';
import render_1_3 from './components/component_1_3.js';
import render_2_1 from './components/component_2_1.js';
import render_2_2 from './components/component_2_2.js';
import render_2_3 from './components/component_2_3.js';
import render_3_1 from './components/component_3_1.js';
import render_3_2 from './components/component_3_2.js';
import render_3_3 from './components/component_3_3.js';

// main.js
document.addEventListener("DOMContentLoaded", function () {
    render_bar();
    loadData01().then(data01 => {
        render_1_3(data01.RECORDS);
        loadData02().then(data02 => {
            render_1_1(data02.RECORDS, data01.RECORDS);
        }).catch(error => {
            console.error('Failed to process data:', error);
        });
    }).catch(error => {
        console.error('Failed to process data:', error);
    });
    loadData05().then(data05 => {
        render_1_2(data05.RECORDS);
    }).catch(error => {
        console.error('Failed to process data:', error);
    });
    render_2_1();
    render_2_2();
    render_2_3();
    
    loadData03().then(data03 => {
        render_3_2(data03);
    }).catch(error => {
        console.error('Failed to process data:', error);
    });
    loadData07().then(data07 => {
        render_3_3(data07.data);
    }).catch(error => {
        console.error('Failed to process data:', error);
    });
    
    render_3_1();
    render_3_2();
    render_3_3();
});

async function loadData01() {
    try {
        const response = await fetch('./data/01-2023年全年图书借阅预约归还等数据-更新.json');
        return await response.json();
    } catch (error) {
        return console.error('Error loading JSON:', error);
    }
}

async function loadData02() {
    try {
        const response = await fetch('./data/02-2023年全年入馆数据.json');
        return await response.json();
    } catch (error) {
        return console.error('Error loading JSON:', error);
    }
}

async function loadData03() {
    try {
        const response = await fetch('./data/03-检索热度.json');
        return await response.json();
    } catch (error) {
        return console.error('Error loading JSON:', error);
    }
}



async function loadData05() {
    try {
        const response = await fetch('./data/05-2023年全年实时在馆人数-2分钟一更新.json');
        return await response.json();
    } catch (error) {
        return console.error('Error loading JSON:', error);
    }
}



async function loadData07() {
    try {
        const response = await fetch('./data/07-231101-240331小组学习面试空间预约情况.json');
        return await response.json();
    } catch (error) {
        return console.error('Error loading JSON:', error);
    }
}

