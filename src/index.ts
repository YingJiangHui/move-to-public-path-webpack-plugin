import {Compiler} from 'webpack'
import path from 'path'
import fs from 'fs-extra'

class WebpackPluginDeleteSourcemap {
  apply(compiler:Compiler){
    compiler.hooks.done.tap('move-to-public-path-webpack-plugin',(stats)=>{
    
    })
  }
}
export default WebpackPluginDeleteSourcemap