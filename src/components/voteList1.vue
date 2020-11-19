<template>
    <div>
        <div class="to-begin">
            <div class="title">Vote for Your Favorite Pool</div>
            <div class="subtitle">SUN Team</div>
        </div>
        <div class="vote-main">
            <div class="vote-left">
                <div class="vote-detail-info">
                    <div class="vote-detail-info-title">
                        <span class="vote-detail-info-logo"></span>
                            Voting rules
                    </div>
                    <div class="vote-detail-info-content">
                        <ul>
                            <li>
                                <span>1</span>
                                Vote with SUN, and user rewards are proportionate to the percentage of SUN cast by the user against the total pool supply;
                            </li>
                            <li>
                                <span>2</span>
                                Vote for only one candidate in each session, and you may cast follow-up votes but cannot withdraw votes you cast;
                            </li>
                            <li>
                                <span>3</span>
                                Votes you cast and the voting rewards can be claimed when the voting session ends.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vote-list">
                    <div class="ant-tab-btn">Result</div>
                    <div class="ant-tab-content">
                        <div class="ant-tab-head">
                            <tr>
                                <td class="ant-tab-cell">Candidates</td>
                                <td class="ant-tab-cell">Vote count</td>
                                <td class="ant-tab-cell">Proportion</td>
                            </tr>
                        </div>
                        <div class="ant-tab-body">
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">HT</a></td>
                                <td class="ant-tab-cell">160.30K</td>
                                <td class="ant-tab-cell">53.21 %</td>
                            </tr>
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">SUN</a></td>
                                <td class="ant-tab-cell">47.04K</td>
                                <td class="ant-tab-cell">15.61 %</td>
                            </tr>
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">GOLD</a></td>
                                <td class="ant-tab-cell">23.83K</td>
                                <td class="ant-tab-cell">7.91 %</td>
                            </tr>
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">JFI</a></td>
                                <td class="ant-tab-cell">19.47K</td>
                                <td class="ant-tab-cell">6.46 %</td>
                            </tr>
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">LIVE</a></td>
                                <td class="ant-tab-cell">12.17K</td>
                                <td class="ant-tab-cell">4.03 %</td>
                            </tr>
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">DIVE</a></td>
                                <td class="ant-tab-cell">7.00K</td>
                                <td class="ant-tab-cell">2.32 %</td>
                            </tr>
                            <tr class="ant-tab-row">
                                <td class="ant-tab-cell"><a href="">PEARL</a></td>
                                <td class="ant-tab-cell">6.38K</td>
                                <td class="ant-tab-cell">2.11 %</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vote-right">
                <div class="vote-info">
                    <div class="vote-info-title">Basic Info</div>
                    <div class="vote-info-content">
                        <ul class="info-right">
                            <li class="end">
                                <span>Status</span>
                                <span>Close</span>
                            </li>
                            <li>
                                <span>Total votes</span>
                                <span>301,254 SUN</span>
                            </li>
                            <li>
                                <span>Total pool supply</span>
                                <span>1,200 SUN</span>
                            </li>
                            <li class="process">
                                <span>Progress</span>
                                <span class="ant-process-bg"></span>
                            </li>
                            <li>
                                <span>Start</span>
                                <span>2020-10-15 17:00:00</span>
                            </li>
                            <li>
                                <span>Total votes</span>
                                <span>2020-10-18 17:00:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vote-account">
                    <div class="vote-account-title">My vote</div>
                    <div class="vote-account-content">
                        <div class="title-end">The voting session has ended.</div>
                        <div class="not-tip">Thank you for your interest!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $color: #5915e1;
    .to-begin{
        width: 85%;
        margin: 108px auto 0;
        color: #fff;
        border-radius: 10px;
        .title{
            font-size: 20px;
        }
        .subtitle{
            font-size: 13px;
            margin-top: 6px;
        }
    }
</style>