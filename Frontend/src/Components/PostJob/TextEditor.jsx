import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { useEffect } from 'react';


const TextEditor = (props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: props?.form?.getValues()?.description || '',
    onUpdate({ editor }) {
      if (props?.form?.setFieldValue && editor) {
        props.form.setFieldValue('description', editor.getHTML()); 
      }
    },
  });
  
  useEffect(() => {
    if (editor?.commands && props?.data) {
      try {
        editor.commands.setContent(props.data);
      } catch (error) {
        console.error('Error setting editor content:', error);
      }
    }
  }, [props?.data, editor]);
  
  if (!editor) {
    return <div>Loading editor...</div>;
  }
  try {
    return (
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar bg="mineShaft.10" sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content bg="mineShaft.10" />
      </RichTextEditor>
    );
  } catch (error) {
    console.error('TextEditor render error:', error);
    return (
      <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded">
        Error loading text editor. Please refresh the page.
      </div>
    );
  }
}
export default TextEditor;