import React, { useEffect, useState } from 'react';
import '../styles/Downloads.scss';
import Button from '../components/Button/Button';
import { linuxIcon, macIcon, windowsIcon } from '../assets/exports';
import { fetchAllReleases } from '../util/downloader';
import LinuxDownloadModal from '../components/LinuxDownloadModal/LinuxDownloadModal';

const Downloads = () => {
  const [windowsInstaller, setWindowsInstaller] = useState(null);
  const [macInstaller, setMacInstaller] = useState(null);
  const [linuxDebInstaller, setLinuxDebInstaller] = useState(null);
  const [linuxRpmInstaller, setLinuxRpmInstaller] = useState(null);
  const [isLinuxModalOpen, setIsLinuxModalOpen] = useState(false);

  useEffect(() => {
    const owner = 'crazy-thing'; 
    const repo = 'mml'; 

    fetchAllReleases(owner, repo).then(releases => {
      if (releases.length > 0) {
        const latestRelease = releases[0];
        setWindowsInstaller(latestRelease.assets.windows);
        setMacInstaller(latestRelease.assets.mac);
        setLinuxDebInstaller(latestRelease.assets.linuxDeb);
        setLinuxRpmInstaller(latestRelease.assets.linuxRpm);
      }
    }).catch(error => {
      console.error('Failed to fetch releases:', error);
    });
  }, []);

  return (
    <div className='downloads'>
      <div className='downloads-content'>
        <div className='downloads-content-item'>
          <p className='downloads-content-os'>Windows Installer</p>
          {windowsInstaller && (
            <Button 
              icon={windowsIcon} 
              text="Installer" 
              onClick={() => window.open(windowsInstaller.downloadUrl, '_blank')}
            />
          )}
        </div>

        <div className='downloads-content-item'>
          <p className='downloads-content-os'>MacOS Installer</p>
          {macInstaller && (
            <Button 
              icon={macIcon} 
              text="Installer" 
              onClick={() => window.open(macInstaller.downloadUrl, '_blank')}
            />
          )}
        </div>

        <div className='downloads-content-item'>
          <p className='downloads-content-os'>Linux Installer</p>
          {(linuxDebInstaller || linuxRpmInstaller) && (
            <Button 
              icon={linuxIcon} 
              text="Installer" 
              onClick={() => setIsLinuxModalOpen(true)}
            />
          )}
        </div>
      </div>
      <LinuxDownloadModal 
        isOpen={isLinuxModalOpen} 
        onClose={() => setIsLinuxModalOpen(false)}
        debUrl={linuxDebInstaller?.downloadUrl}
        rpmUrl={linuxRpmInstaller?.downloadUrl}
      />
    </div>
  );
};

export default Downloads;
