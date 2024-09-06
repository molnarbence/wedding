<template>
  <span>
    <HeroBanner />

    <div id="story" class="w-full">
      <div class="flex justify-center">
        <div class="max-w-5xl">
          <div class="flex items-center justify-center flex-col text-center">
            <HeaderWithDeco />
            <div class="text-center space-y-4 px-4 sm:px-0">
              <p class="leading-1 text-gray-500 font-sans">
                <cite>
                  "Rejtelmek ha zengenek, <br />
                  őrt állok, mint mesékbe'.<br />
                  Bebujtattál engemet <br />
                  talpig nehéz hűségbe."<br />
                  <small>(József Attila: Rejtelmek)</small>
                </cite>
              </p>
            </div>
            <HeaderWithDeco />
          </div>

          <ParagraphSection class="mt-4">
            <HeaderWithDeco>Kedves családunk és barátaink</HeaderWithDeco>
            <div class="text-center space-y-4 px-4 sm:px-0">
              <p class="leading-1 text-gray-500 font-sans">
                Idén <b>szeptember 14-én, 15:30-kor</b> szentségi házasságot kötünk a Jézus Szíve Jezsuita Templomban.
              </p>
            </div>
          </ParagraphSection>

          <ParagraphSection class="mt-4">
            <div class="text-center space-y-4 px-4 sm:px-0">
              <NuxtImg src="/images/templom-terkep.png" alt="templom" />
            </div>
          </ParagraphSection>
        </div>
      </div>
    </div>
  </span>
</template>
