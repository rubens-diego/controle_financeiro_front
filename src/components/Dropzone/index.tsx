import React, { useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import styled from "./styles.module.css";
import Image from "next/image";

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);

      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className={styled.dropzone} {...getRootProps()} onChange={() => {}}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <Image
          layout="fill"
          width="300px"
          height="300px"
          src={selectedFileUrl}
          alt="Bank"
        />
      ) : (
        <p>
          <FiUpload />
          Imagem da logo do banco
        </p>
      )}
    </div>
  );
};

export default Dropzone;
