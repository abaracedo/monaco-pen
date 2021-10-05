import * as monaco from 'monaco-editor'
import './style.css'

monaco.editor.create(document.getElementById('root'), {
  value: 'const foo = () => 0',
  language: 'javascript',
})
