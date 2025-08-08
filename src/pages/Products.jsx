import React, { useState } from 'react'

const Products = () => {

  const [activeTab, setActiveTab] = useState('groundnut')


  return (
    <>
      {/* products section start  */}

      <section className='products-section section-padding anek-gujarati'>
        <div className="container">
          <div className="row">
            <div className="heading">
              <h2>શિવશક્તિ <span> ઓઇલ્સ</span></h2>
              <p>" એકજ ગુણવત્તા, દરેક કદમાં શુદ્ધતા સાથે ઉપલબ્ધ "</p>
            </div>

            <div className="tab-btns flex">
              <div className="btn-group">
                <button onClick={() => setActiveTab('groundnut')}
                  className={`tab-button anek-gujarati groundnut-btn ${activeTab === 'groundnut' ? 'active' : ''}`}>સીંગતેલ</button>

                <button onClick={() => setActiveTab('sunflower')}
                  className={`tab-button anek-gujarati sunflower-btn ${activeTab === 'sunflower' ? 'active' : ''}`}>સૂર્યમુખી તેલ</button>
              </div>
            </div>

            <div className="main">
              {
                activeTab == 'groundnut' && (
                  <>
                    <div className="oil-benefits">
                      <div className="box">
                        <div className="content">
                          <div className="head">
                            <h4>મગફળીના તેલ સાથે દરેક ટીપામાં મગફળીની સ્વાદિષ્ટતા</h4>
                          </div>
                          <div className="details">
                            <p>" શિવશક્તિ ઓઇલ મિલ " G-20 મગફળીનું શ્રેષ્ઠ મટીરીયલ અને ગુણવત્તાવાળી સિંગનો ઉપયોગ કરે છે.</p>

                            <p>મગફળીના તેલની ચોક્કસ ફેટી એસિડ પ્રોફાઇલ ઊંચા તાપમાને ઓક્સિડેશનનો પ્રતિકાર કરે છે, જેના કારણે તે તૂટી જવા અને હાનિકારક મુક્ત રેડિકલ બનવાનું ઓછું જોખમ ધરાવે છે. આનો અર્થ એ છે કે અમારું શુદ્ધ મગફળીનું તેલ લાંબા સમય સુધી ટકી રહેશે અને ખાતરી કરશે કે તમારા ખોરાકને લાંબા સમય સુધી રાંધવા છતાં પણ તેની સ્વાદિષ્ટતા અને જીવંત સ્વાદ જાળવી રાખશે.</p>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="head">
                            <h4>" દરેક ટીપામાં વિશ્વાસ અને ગુણવત્તાનો અહેસાસ " </h4>
                          </div>

                          <div className="details">
                            <ul className='flex'>
                              <li>
                                <div className="icon i1 flex">
                                  <img src="/img/nuts.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>G-20 મગફળીનું શ્રેષ્ઠ ગુણવત્તાવાળી સિંગનો ઉપયોગ કરીને બનાવેલું તેલ</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i2 flex">
                                  <img src="/img/flavours.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>કુદરતી સ્વાદ વધારે છે</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i3 flex">
                                  <img src="/img/vitamin.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>વિટામિન A અને E થી ભરપૂર</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i4 flex">
                                  <img src="/img/fry.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>ઊંચા તાપમાને સ્થિર હોવાથી તે ઊંડા તળવા અને સાંતળવા માટે આદર્શ બને છે.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i5 flex">
                                  <img src="/img/heart.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>મોનોઅનસેચ્યુરેટેડ ફેટી એસિડ્સ (MUFA) ધરાવે છે જે સ્વસ્થ હૃદય જાળવવામાં મદદ કરે છે</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box-group flex">
                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/1l_nuts.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>1 લિટર સીંગતેલ </h3>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/5l_nuts.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>5 લિટર સીંગતેલ </h3>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/15l_nuts.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>15 લિટર સીંગતેલ </h3>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/15kg_nuts.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>15 કિલો સીંગતેલ </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
              {
                activeTab == 'sunflower' && (
                  <>
                    <div className="oil-benefits">
                      <div className="box">
                        <div className="content">
                          <div className="head">
                            <h4>સૂર્યમુખી તેલ સાથે રોજિંદા રસોઈમાં સ્વચ્છતાનો અહેસાસ.</h4>
                          </div>
                          <div className="details">
                            <p>" શિવશક્તિ ઓઇલ મિલ "  સૂર્યમુખી ના શ્રેષ્ઠ અને ગુણવત્તાવાળા બીજ નો ઉપયોગ કરે છે.</p>

                            <p>શિવશક્તિ સૂર્યમુખી બીજ તેલ એક હળવું, સ્વસ્થ અને પૌષ્ટિક રસોઈ તેલ છે. વિટામિન્સ અને પોલીઅનસેચ્યુરેટેડ ફેટી એસિડથી ભરપૂર હોવાથી, શિવશક્તિ સૂર્યમુખી તેલ ખોરાકને પચવામાં સરળ અને હલકું બનાવે છે. તેથી, સાંજનો નાસ્તો હોય કે મધ્યરાત્રિની તૃષ્ણા, પાછળ રહેવાની જરૂર નથી કારણ કે શિવશક્તિ સૂર્યમુખી બીજ તેલ તમારા સ્વાસ્થ્યનું ધ્યાન રાખશે!</p>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="head">
                            <h4>" દરેક ટીપામાં વિશ્વાસ અને ગુણવત્તાનો અહેસાસ " </h4>
                          </div>

                          <div className="details">
                            <ul className='flex'>
                              <li>
                                <div className="icon i1 flex">
                                  <img src="/img/digest.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>હલકું અને સ્વસ્થ, પચવામાં સરળ</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i2 flex">
                                  <img src="/img/system.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>રોગપ્રતિકારક શક્તિને મજબૂત બનાવે છે</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i3 flex">
                                  <img src="/img/vitamin.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>વિટામિન E થી ભરપૂર અને ત્વચાને સ્વસ્થ રાખો</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon i4 flex">
                                  <img src="/img/heart.png" alt="" />
                                </div>
                                <div className="disc">
                                  <p>હૃદય માટે સારું</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box-group flex">
                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/1l_sunflowers.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>1 લિટર સૂર્યમુખી તેલ </h3>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/5l_sunflower.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>5 લિટર સૂર્યમુખી તેલ </h3>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/15l_sunflower.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>15 લિટર સૂર્યમુખી તેલ </h3>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="image">
                            <img src="/img/15kg_sunflower.png" alt="" />
                          </div>
                          <div className="details">
                            <p>શિવશક્તિ ઘાણી નું શુદ્ધ</p>

                            <h3>15 કિલો સૂર્યમુખી તેલ </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }

            </div>
          </div>
        </div>
      </section>

      {/* products section end */}
    </>
  )
}

export default Products