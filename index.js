/**
 * Created by fangtao on 15/12/22.
 */
'use strict';

var React = require('react-native');
var { requireNativeComponent, PropTypes,View,processColor } = React;
var RCTUIManager = React.NativeModules.UIManager;

var RefreshLayoutConsts = require('NativeModules').UIManager.RNRefreshScrollView.Constants;

var onlyChild = require('onlyChild');

var S_REF = 'RNRefreshScrollView';

var RNRLScrollview = React.createClass({
        statics: {
            SIZE: RefreshLayoutConsts.SIZE,
        },

        getInnerViewNode: function () {
            return this.refs[NATIVE_REF];
        },

        propTypes: {
            ...View.propTypes,
            /**
             * Whether the pull to refresh functionality is enabled
             */
            enabled: React.PropTypes.bool,
            /**
             * The colors (at least one) that will be used to draw the refresh indicator
             */
            colors: React.PropTypes.arrayOf(React.PropTypes.string),
            /**
             * The background color of the refresh indicator
             */
            progressBackgroundColor: React.PropTypes.string,
            /**
             * Whether the view should be indicating an active refresh
             */
            refreshing: React.PropTypes.bool,
            /**
             * Size of the refresh indicator, see PullToRefreshViewAndroid.SIZE
             */
            size: React.PropTypes.oneOf(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE),
            onLoadMore: PropTypes.func,
            onRefresh: PropTypes.func,
        },

        _onRefresh()
        {
            //invoke your onRefresh func
            this.props.onRefresh && this.props.onRefresh();
        },

        _onLoadmore()
        {
            //invoke your onLoadMore func
            this.props.onLoadMore && this.props.onLoadMore();
        },

        loadComplete()
        {
            this.refs[S_REF].setNativeProps({refreshing: false});
        },

        render: function () {
            return (<RNRefreshScrollView
                    colors={this.props.colors && this.props.colors.map(processColor)}
                    enabled={this.props.enabled}
                    refreshing={this.props.refreshing}
                    size={this.props.size}
                    style={this.props.style}
                    progressBackgroundColor={this.props.progressBackgroundColor}
                    ref={S_REF}
                    onRefresh={this._onRefresh}
                    onLoadmore={this._onLoadmore}
                    {...this.props} >
                    {onlyChild(this.props.children)}
                </RNRefreshScrollView>
            );
        }
        ,
    })
    ;

var RNRefreshScrollView = requireNativeComponent('RNRefreshScrollView', RNRLScrollview);

module.exports = RNRLScrollview;
