# react-native-refresh-loadmore-scrollview
A component which add Onrefresh and OnloadMore function on ScrollView just for android .

for ios,you can find the component from github written in pure javascript.

but android I cannot handle the scroll event in javascript .

in react-native 0.17.0-rc code,SwipeRefreshLayoutManager.java has achieved the pull-down-refresh but no pull-up-loadmore,

so I modify the SwipeRefreshLayoutManager.java to add the pull-up-loadmore .


use:
  in Setting.gradle add include and projectDir config like this:

  rootProject.name = 'example'

  include ':react-native-refresh-loadmore-scrollview'

  project(':react-native-refresh-loadmore-scrollview').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-refresh-loadmore-scrollview')

  and in application's build.gradle

  add compile project(':react-native-refresh-loadmore-scrollview') in dependencies like this:


  dependencies {

      compile project(':react-native-refresh-loadmore-scrollview')

  }


  then in your js code ,you can use the component as your own ListView's parentView,like this:

Example.js

  var RNRLScrollView = require('react-native-refresh-loadmore-scrollview')  ;

  var React = require('react-native');

  var {ListView} = React ;

  module.exports = React.createClass({

    render(){

        _onLoadmore(){
            //do your loadmore operate and change the ListView's datasource
            console.log('onLoadmore=================') ;
        },

        _onRefresh(){
         //do your refresh operate and change the ListView's datasource
            console.log('onRefresh=================') ;
        },

        return(
            <RNRLScrollView onLoadMore={this._onLoadmore} onRefresh={this._onRefresh}>
                <ListView/>
             </RNRLScrollView>
        ) ;
    },

  }) ;



