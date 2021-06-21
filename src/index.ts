import {Compiler, Stats} from 'webpack'
import path from 'path'
import fs from 'fs-extra'

class MoveToPublicPathWebpackPlugin {
  apply(compiler:Compiler){
    compiler.hooks.done.tap('move-to-public-path-webpack-plugin',(stats:Stats)=>{
      const {compilation} = stats
      if(!(typeof compilation.outputOptions.publicPath==='string')||compilation.outputOptions.publicPath==='auto')return;
      const publicPath = /^[/]/.test(compilation.outputOptions.publicPath)?'.'+compilation.outputOptions.publicPath:compilation.outputOptions.publicPath
      const outputPath = compilation.outputOptions.path
      const oldPath = path.resolve(outputPath)
      const newPath = path.resolve(outputPath,publicPath)
      if(oldPath===newPath) return;
      Object.keys(compilation.assets).filter((filename)=>(/[^index.html]/.test(filename))).map(async (filename)=>{
        await fs.move(path.resolve(oldPath,filename),path.resolve(newPath,filename),{overwrite:true})
      })
    })
  }
}
export default MoveToPublicPathWebpackPlugin