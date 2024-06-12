import React from 'react';
import '../../styles/LinuxDownloadModal.scss';
import Button from '../Button/Button';
import { close, debianIcon, redhatIcon } from '../../assets/exports';

const LinuxDownloadModal = ({ isOpen, onClose, debUrl, rpmUrl }) => {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <p className='modal-text'>Choose Linux Installer</p>
        <img src={close} onClick={onClose} alt='close' className='modal-close'/>
        <div className='modal-buttons'>
          {debUrl && (
              <Button text={"Installer .deb"} icon={debianIcon} onClick={() => window.open(debUrl, '_blank')} /> 
          )}
          {rpmUrl && (
              <Button text={"Installer .rpm"} icon={redhatIcon} onClick={() => window.open(rpmUrl, '_blank')} /> 
          )}
        </div>
      </div>
    </div>
  );
};

export default LinuxDownloadModal;
