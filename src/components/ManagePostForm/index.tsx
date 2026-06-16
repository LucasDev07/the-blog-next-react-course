'use client';

import { useState } from 'react';
import { Button } from '../Button';
import { InputCheckbox } from '../InputCheckbox';
import { InputText } from '../InputText';
import { MarkdownEditor } from '../MarkdownEditor';
import { ImageUploader } from '../admin/ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Nome' placeholder='Digite o seu nome' />

        <ImageUploader />

        <InputText labelText='Sobrenome' placeholder='Digite o seu sobrenome' />

        <InputCheckbox labelText='Sobrenome' />

        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite o seu sobrenome'
          defaultValue='Olá mundo'
        />
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite o seu sobrenome'
        />

        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />

        <InputText
          labelText='Sobrenome'
          placeholder='Digite o seu sobrenome'
          readOnly
        />
        <InputText
          labelText='Sobrenome'
          placeholder='Digite o seu sobrenome'
          defaultValue='Olá Mundo'
          readOnly
        />
        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
